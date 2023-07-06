import React from "react";

function About() {
    return (
        <>
            <section className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto">
                    <div className="absolute right-0 -top-[138px]">
                        <img src="clip-right.png" alt="" />
                    </div>
                    
                    <div before="ABOUT ME" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">Know Me More</div>
                    </div>

                    <div className="text-1xl text-white">asdasf</div>

                    <div className="flex text-center">
                        <div className="text-9xl text-white flex-none mr-10 font-extrabold">+10<span className="block text-2xl font-light">YEARS OF<br/>EXPERIENCE</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About