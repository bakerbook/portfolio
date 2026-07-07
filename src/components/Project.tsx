import React from "react"

export type ProjectItem = {
    title: string,
    description: string,
    link: string,
    tech: string[]
}

export function Project({ title, description, link, tech }: ProjectItem){
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-2 md:gap-0">
            <div className="flex-1">
                <a
                    href={link}
                    className="text-base font-semibold underline decoration-dashed cursor-pointer"
                    target="_blank"
                    referrerPolicy="origin"
                >
                    {title}
                </a>
            </div>
            <div className="flex-1 text-base text-gray-600 leading-tight mt-1 md:mt-0 md:text-right md:ml-4">
                {description}<br></br><span className="italic font-bold">{tech.join(", ")}</span>.
            </div>
        </div>
    )
}