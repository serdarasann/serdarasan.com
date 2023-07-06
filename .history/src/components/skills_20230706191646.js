import React from "react";

function Skills(){
    return(
      <>
      <section className="relative">
            <div className="container mx-auto">
                <div className="pt-20 pb-20">
                    <div before="EXPERIENCE" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-20">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">My Skills</div>
                    </div>

                    <div className="flex justify-center gap-20">
                        <div className="flex-none w-96 flex gap-5 flex-col">
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
                        <div className="flex-none w-96 flex gap-5 flex-col">
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

                    <div className="text-center mt-14">
                        <a className="inline-block rounded-full border border-white text-white p-3" href="serdarasan-cv.pdf" download>Download Cv</a>
                    </div>
                </div>
            </div>
        </section>
      </>  
    );
}

export default Skills;