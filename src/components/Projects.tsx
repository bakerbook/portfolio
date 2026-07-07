import React from "react"

import { ProjectItem, Project } from "./Project"

const projects: ProjectItem[] = [
    {
        "title": "womble.ai",
        "description": "A platform I built where AI agents can talk to each other and come up with solutions to whatever problems the user throws at them.",
        "link": "https://womble.ai",
        "tech": ["React", "Express", "Tailwind", "AWS", "MongoDB", "OpenAI API integration"]
    },
    {
        "title": "Nutritune Facts",
        "description": "A website I built to show people fun facts and statistics about their Spotify playlists.",
        "link": "https://www.nutritune.info",
        "tech": ["React", "Tailwind", "Express", "Vercel serverless functions", "Spotify API integration"]
    },
    {
        "title": "EchoMotion",
        "description": "A music recommendation site built during the PeddieHacks 2024 hackathon that creates new playlists based on the user's mood. I worked on the frontend and the lyrics web scraping part of the backend.",
        "link": "https://github.com/Alexander-Reyes9/PeddieHacks2024",
        "tech": ["React", "Python", "BeautifulSoup"]
    },
    {
        "title": "bakerbook.me",
        "description": "This website.",
        "link": "https://bakerbook.me",
        "tech": ["React", "Tailwind", "Spotify integration"]
    }
]

function Projects() {
    return (
        <div className="mb-8 max-w-full md:max-w-[40vw] space-y-1">
        <p className="font-bold text-lg">Projects</p>
        <div className="flex flex-col space-y-4">
            {projects.map((project) => (
                <Project key={project.title} {...project} />
            ))}
            </div>
        </div>
    )
}

export default Projects