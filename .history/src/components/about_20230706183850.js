import React from "react";

function About() {
    return (
        <>
            <section className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto">
                    <div className="absolute right-0 -top-[138px]">
                        <img src="clip-right.png" alt="" />
                    </div>
                    
                    <div before="ABOUT ME" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">Know Me More</div>
                    </div>

                    <div className="text-1xl text-white text-center leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

                    <div className="flex text-center gap-50">
                        <div className="text-9xl text-white flex-none mr-10 font-extrabold">10+<span className="block text-2xl font-light">YEARS OF<br/>EXPERIENCE</span></div>
                        <div className="text-9xl text-white flex-none mr-10 font-extrabold">100+<span className="block text-2xl font-light">COMPLETED<br/>PROJECT</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About