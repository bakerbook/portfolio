import React from "react"

function WorkExperience() {
    return (
        <div className="mb-8 max-w-full md:max-w-[40vw] space-y-1">
                <p className="font-bold text-lg">Work Experience</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-2 md:gap-0">
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
                        <div className="flex-1 text-base text-gray-600 leading-tight mt-1 md:mt-0 md:text-right md:ml-4">
                            <span className="font-bold">April 2024 to August 2025</span><br></br>Taught kids aged 7-15 how to code in <span className="italic font-bold">Python, Scratch, JavaScript, HTML, CSS, Java</span>.
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WorkExperience