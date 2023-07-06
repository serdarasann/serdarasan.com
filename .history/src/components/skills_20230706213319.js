import React from "react";
import { AiOutlineCloudDownload } from 'react-icons/ai';

function Skills(){
    return(
      <>
      <section id="setSkills" className="relative">
            <div className="container mx-auto pl-5 pr-5">
                <div className="pt-20 pb-20">
                    <div before="EXPERIENCE" className="Title">
                        <div className="T">My Skills</div>
                    </div>

                    <div className="flex justify-center gap-20 max-lg:flex-col max-sm:gap-0">
                        <div className="flex-none w-96 max-lg:w-full flex gap-5 flex-col">
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">Web Design<span>90%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[90%] before:bg-[#ffcd57]"></div>
                            </div>
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">HTML5/CSS3<span>95%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[95%] before:bg-[#ffcd57]"></div>
                            </div>
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">Js/Jquery<span>80%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[80%] before:bg-[#ffcd57]"></div>
                            </div>
                        </div>
                        <div className="flex-none w-96 max-lg:w-full flex gap-5 flex-col">
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">React JS<span>30%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[30%] before:bg-[#ffcd57]"></div>
                            </div>
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">Tailwind CSS<span>85%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[85%] before:bg-[#ffcd57]"></div>
                            </div>
                            <div className="">
                                <div className="text-white font-medium flex justify-between mb-2">Photoshop <span>60%</span></div>
                                <div className="rounded w-full h-2 bg-[#636363] relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0 before:w-[60%] before:bg-[#ffcd57]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <a className="inline-flex items-center rounded-full border border-white text-white pt-3 pb-3 pl-6 pr-6 transition hover:bg-white hover:text-[#636363]" href="serdarasan-cv.pdf" download>Download CV <AiOutlineCloudDownload className="ml-2 text-2xl" /></a>
                    </div>
                </div>
            </div>
        </section>
      </>  
    );
}

export default Skills;