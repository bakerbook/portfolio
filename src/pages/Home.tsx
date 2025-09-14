import React from "react"

import SpotifyPlayer from "../components/SpotifyPlayer"

function Home() {
    return (
        <div className="m-4 min-h-screen flex flex-col">
            <div className="mb-8">
                <p className="mb-2 font-bold text-lg">Baker Book</p>
                <p>
                    18 y/o Computer Science Freshman at <span className="font-bold">UCLA</span>
                </p>
            </div>
            <div className="mb-8">
                <p className="font-bold text-lg">Links</p>
                <div className="flex flex-col">
                    <a
                        href="mailto:bakerbook@ucla.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-dashed cursor-pointer"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/bakerbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-dashed cursor-pointer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/bakerbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-dashed cursor-pointer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="mb-8 max-w-[40vw] space-y-1">
                <p className="font-bold text-lg">Work Experience</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-baseline">
                        <div className="flex-1">
                            <a
                                href="https://www.thecoderschool.com"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                theCoderSchool
                            </a>
                        </div>
                        <div className="flex-1 text-right text-base text-gray-600 ml-4 leading-tight">
                            <span className="font-bold">April 2024 to August 2025</span><br></br>Taught kids aged 7-15 how to code in <span className="italic font-bold">Python, Scratch, JavaScript, HTML, CSS, Java</span>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8 max-w-[40vw] space-y-1">
                <p className="font-bold text-lg">Projects</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-baseline">
                        <div className="flex-1">
                            <a
                                href="https://womble.ai"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                referrerPolicy="origin"
                            >
                                womble.ai
                            </a>
                        </div>
                        <div className="flex-1 text-right text-base text-gray-600 ml-4 leading-tight">
                            A platform I'm building where AI agents can talk to each other and come up with solutions to whatever problems the user throws at them.<br></br>Full stack development with <span className="italic font-bold">React, Express, Tailwind, AWS, MongoDB, OpenAI API integration</span>.
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="flex-1">
                            <a
                                href="https://www.nutritune.info"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                            >
                                Nutritune Facts
                            </a>
                        </div>
                        <div className="flex-1 text-right text-base text-gray-600 ml-4 leading-tight">
                            A website I built to show people fun facts and statistics about their Spotify playlists.<br></br><span className="italic font-bold">React, Tailwind, Express, Vercel serverless functions, Spotify API integration</span>.
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="flex-1">
                            <a
                                href="https://github.com/Alexander-Reyes9/PeddieHacks2024"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                EchoMotion
                            </a>
                        </div>
                        <div className="flex-1 text-right text-base text-gray-600 ml-4 leading-tight">
                            A music recommendation site built during the PeddieHacks 2024 hackathon that creates new playlists based on the user's mood. I worked on the frontend and the lyrics web scraping part of the backend.<br></br><span className="italic font-bold">React, Python, BeautifulSoup</span>.
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="flex-1">
                            <a
                                href="https://bakerbook.me"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                            >
                                bakerbook.me
                            </a>
                        </div>
                        <div className="flex-1 text-right text-base text-gray-600 ml-4 leading-tight">
                            This website.<br></br><span className="italic font-bold">React, Tailwind, Spotify integration</span>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto mb-8">
                <SpotifyPlayer />
            </div>
        </div>
    )
}

export default Home