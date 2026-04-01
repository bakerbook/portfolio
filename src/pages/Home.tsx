import React from "react"

import SpotifyPlayer from "../components/SpotifyPlayer"

import WorkExperience from "../components/WorkExperience"
import Projects from "../components/Projects"
import OtherExperience from "../components/OtherExperience"

function Home() {
    return (
        <div className="m-4 min-h-screen flex flex-col">
            <div className="mb-8">
                <p className="mb-2 font-bold text-lg">Baker Book</p>
                <p>
                    19 y/o Computer Science Freshman at <span className="font-bold">UCLA</span>
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
            <WorkExperience />
            <OtherExperience />
            <Projects />
            <div className="mt-auto mb-8">
                <SpotifyPlayer />
            </div>
        </div>
    )
}

export default Home