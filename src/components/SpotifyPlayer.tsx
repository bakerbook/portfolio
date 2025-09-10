import React, { useState, useEffect } from "react"
import MarqueeText from "./MarqueeText"

type Song = {
    name: string
    artist: string
    link: string
}

function SpotifyPlayer() {
    const [song, setSong] = useState<Song | null>(null)

    useEffect(() => {
        async function fetchNowPlaying(){
            const response = await fetch("/api/now-playing", { cache: "no-store" })
            if(response.status === 200){
                const data = await response.json()
                setSong({
                    name: data.name,
                    artist: data.artist,
                    link: data.link
                })
            }else{
                setSong(null)
            }
        }
        fetchNowPlaying()
    }, [])

    return (
        <div className="items-center">
            {song && (
                <h1>currently playing on spotify:</h1>
            )}
            {!song && (
                <h1>spotify currently offline</h1>
            )}
            <div className={`relative w-48 h-24 border border-black border-1 text-center flex flex-col items-center justify-center`}>
                <span className="absolute top-1 right-1">
                    <span className="relative flex h-4 w-4">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${song ? "bg-green-400" : "bg-red-400"} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-4 w-4 ${song ? "bg-green-500" : "bg-red-500"}`}></span>
                    </span>
                </span>
                {song && (
                    <div className="flex items-center gap-2 w-full">
                        <div className="text-center w-full px-2">
                            <MarqueeText text={song.name} wrapperClassName="w-full" textClassName="text-sm font-medium" />
                            <MarqueeText text={song.artist} wrapperClassName="w-full" textClassName="text-xs text-gray-600" speedPxPerSec={40} />
                        </div>
                        {song.link && (
                            <a className="absolute bottom-1 right-1" href={song.link} target="_blank" rel="noopener noreferrer" aria-label="Open song">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    role="img"
                                    aria-label="Open in new tab"
                                    className="w-4 h-4"
                                >
                                    {/* Box */}
                                    <path d="M18 13v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h5" />
                                    {/* Arrow to top-right */}
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14L21 3" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}
                {!song && (
                    <h1 className="text-3xl">:(</h1>
                )}
            </div>
        </div>
    )
}

export default SpotifyPlayer