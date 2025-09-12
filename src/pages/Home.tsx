import React from "react"

import SpotifyPlayer from "../components/SpotifyPlayer"

function Home() {
    return (
        <div className="m-4 min-h-screen flex flex-col">
            <div className="mb-8">
                <p className="mb-2 font-bold text-lg">baker book</p>
                <p>
                    18 y/o computer science freshman at <span className="font-bold">ucla</span>
                </p>
            </div>
            <div className="mb-8">
                <p className="font-bold text-lg">links</p>
                <div className="flex flex-col">
                    <a
                        href="https://github.com/bakerbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-dashed cursor-alias"
                    >
                        github
                    </a>
                    <a
                        href="https://linkedin.com/in/bakerbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-dashed cursor-alias"
                    >
                        linkedin
                    </a>
                </div>
            </div>
            <div className="mb-8 max-w-[33vw] space-y-1">
                <p className="font-bold text-lg">experience</p>
                <div className="flex flex-col space-y-2">
                    <p>
                        <a
                            href="https://www.thecoderschool.com"
                            className="underline decoration-dashed cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            thecoderschool
                        </a>{" "}
                        - <span className="font-bold">april 2024 to august 2025</span> - taught kids aged 7-15 how to
                        code. taught python, scratch, javascript, html, css, java.
                    </p>
                </div>
            </div>
            <div className="mb-8 max-w-[33vw] space-y-1">
                <p className="font-bold text-lg">projects</p>
                <div className="flex flex-col space-y-2">
                    <p>
                        <a
                            href="https://bakerbook.me"
                            className="underline decoration-dashed cursor-pointer"
                            target="_blank"
                        >
                            bakerbook.me
                        </a>{" "}
                        - this website. react, tailwind, spotify integration.
                    </p>
                    <p>
                        <a
                            href="https://womble.ai"
                            className="underline decoration-dashed cursor-pointer"
                            target="_blank"
                            referrerPolicy="origin"
                        >
                            womble.ai
                        </a>{" "}
                        - a platform where ai agents can
                        talk to each other and come up with solutions to whatever problems the user throws at them.
                        react, express, tailwind, aws, mongodb, openai api integration.
                    </p>
                    <p>
                        <a
                            href="https://www.nutritune.info"
                            className="underline decoration-dashed cursor-pointer"
                            target="_blank"
                        >
                            nutritune facts
                        </a>{" "}
                        - a website to show people fun facts and statistics about their spotify playlists. react, tailwind,
                        express, spotify api integration.
                    </p>
                    <p>
                        <a
                            href="https://github.com/Alexander-Reyes9/PeddieHacks2024"
                            className="underline decoration-dashed cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            echomotion
                        </a>{" "}
                        - a music recommending site built during the peddiehacks 2024 hackathon that creates new playlists based on tbe user's mood. i worked on the frontend and the lyric web scraping part of the backend. react, python, beautifulsoup.
                    </p>
                </div>
            </div>
            <div className="mt-auto mb-8">
                <SpotifyPlayer />
            </div>
        </div>
    )
}

export default Home