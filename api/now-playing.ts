import type { VercelRequest, VercelResponse } from "@vercel/node"

const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
} = process.env

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing"

async function getAccessToken(): Promise<string>{
    const clientId = (SPOTIFY_CLIENT_ID || "").trim()
    const clientSecret = (SPOTIFY_CLIENT_SECRET || "").trim()
    const refreshToken = (SPOTIFY_REFRESH_TOKEN || "").trim()

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Authorization": `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        })
    })
    if(!response.ok){
        throw new Error("Failed to refresh access token")
    }
    const data = await response.json()
    return data.access_token as string
}

export default async function handler(req: VercelRequest, res: VercelResponse){
    try{
        if(!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN){
            console.error("Missing required Spotify env vars. Ensure SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN are set.")
            return res.status(500).json({ error: "Server not configured." })
        }
        const accessToken = await getAccessToken()
        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        if(response.status === 204){
            res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=30")
            return res.status(204).end()
        }
        if(!response.ok){
            const text = await response.text().catch(() => "")
            console.error("Spotify now playing failed", response.status, text)
            res.setHeader("Cache-Control", "no-store");
            return res.status(400).json({ error: "Failed to get now playing" })
        }

        const raw = await response.text()
        if(!raw){
            res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=30")
            return res.status(204).end()
        }

        const data = JSON.parse(raw)

        const { item } = data
        const { name } = item
        const artist = item.artists.map((artist: { name: string }) => artist.name).join(", ") || "unknown artist"
        const link = item.external_urls.spotify || null

        res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=45")
        return res.status(200).json({
            name: name,
            artist: artist,
            link: link
        })
    } catch (error) {
        console.error("Unexpected error in now-playing handler", error)
        return res.status(500).json({ error: "Failed to get now playing" })
    }
}