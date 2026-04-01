import React from "react"

function OtherExperience() {
    return (
        <div className="mb-8 max-w-full md:max-w-[40vw] space-y-1">
                <p className="font-bold text-lg">Other Experience</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-2 md:gap-0">
                        <div className="flex-1">
                            <a
                                href="https://www.joylifentertainment.com"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                joy-LIFE Entertainment
                            </a>
                        </div>
                        <div className="flex-1 text-base text-gray-600 leading-tight mt-1 md:mt-0 md:text-right md:ml-4">
                            <span className="font-bold">January 2026 to Present</span>
                            <br></br>
                            Work on event setup and A&R, finding and contacting artists for interviews and shows.
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-2 md:gap-0">
                        <div className="flex-1">
                            <a
                                href="https://daw.digital"
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                DAW @ UCLA
                            </a>
                        </div>
                        <div className="flex-1 text-base text-gray-600 leading-tight mt-1 md:mt-0 md:text-right md:ml-4">
                            <span className="font-bold">September 2025 to Present</span>
                            <br></br>
                            Work on the DAW website as a part of the web development team.
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-2 md:gap-0">
                        <div className="flex-1">
                            <a
                                href="https://uclaradio.com "
                                className="text-base font-semibold underline decoration-dashed cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                UCLA Radio
                            </a>
                        </div>
                        <div className="flex-1 text-base text-gray-600 leading-tight mt-1 md:mt-0 md:text-right md:ml-4">
                            <span className="font-bold">September 2025 to Present</span>
                            <br></br>
                            Work on the UCLA Radio archive website as a part of the web development team.
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OtherExperience