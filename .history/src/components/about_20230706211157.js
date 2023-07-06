import React from "react";

function About() {
    return (
        <>
            <section id="setAbout" className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto pl-5 pr-5">
                    <div className="absolute right-0 -top-[138px] pointer-events-none">
                        <img src="clip-right.png" alt="" />
                    </div>
                    
                    <div before="ABOUT ME" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">Know Me More</div>
                    </div>

                    <div className="text-1xl text-white text-center leading-7">
                        During my studies in computer programming, I started freelancing simultaneously to gain experience. After graduation, I worked with agencies and corporate companies, gaining experience in different sectors. I developed websites for companies, individuals, educational institutions, and the construction industry.
                        <br/>
                        Between 2017 and 2023, I worked with over 50 e-commerce companies. As of 2023, I am currently working as a front-end developer for an e-commerce company specializing in auto parts.
                    </div>

                    <div className="flex text-center gap-40 justify-center mt-20 sm:max-md:mt-10">
                        <div className="text-9xl text-white flex-none font-extrabold max-md:text-6xl">10+<span className="block text-2xl font-light mt-3 sm:max-md:text-1xl">YEARS OF<br/>EXPERIENCE</span></div>
                        <div className="text-9xl text-white flex-none font-extrabold max-md:text-6xl">99+<span className="block text-2xl font-light mt-3 sm:max-md:text-1xl">COMPLETED<br/>PROJECT</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About