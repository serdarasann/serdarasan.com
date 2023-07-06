import React from "react";

function Skills(){
    return(
      <>
      <section className="relative pt-10 pb-10">
            <div className="container mx-auto">
                <div className="pt-20 pb-20">
                    <div before="EXPERIENCE" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">My Skills</div>
                    </div>

                    <div className="flex justify-center gap-20">
                        <div className="flex-none">
                            <div className="mb-5 w-96">
                                <div className="text-white font-medium flex justify-between mb-2">Web Design<span>90%</span></div>
                                <div className="rounded w-full h-2 bg-stone-800 relative before:absolute before:rounded before:top-0 before:left-0 before:bottom-0"></div>
                            </div>
                        </div>
                        <div className="flex-none">asdasd</div>
                    </div>
                </div>
            </div>
        </section>
      </>  
    );
}

export default Skills;