import React from "react";

function About() {
    return (
        <>
            <section id="setAbout" className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto pl-5 pr-5">
                    <div className="absolute right-0 -top-[138px] pointer-events-none">
                        <img src="clip-right.png" alt="" />
                    </div>
                    
                    <div before="ABOUT ME" className="Title">
                        <div className="T">Know Me More</div>
                    </div>

                    <div className="text-1xl text-white text-center leading-7">
                        During my studies in computer programming, I started freelancing simultaneously to gain experience. After graduation, I worked with agencies and corporate companies, gaining experience in different sectors. I developed websites for companies, individuals, educational institutions, and the construction industry.
                        <br/>
                        Between 2017 and 2023, I worked with over 50 e-commerce companies. As of 2023, I am currently working as a front-end developer for an e-commerce company specializing in auto parts.
                    </div>

                    <div className="flex text-center gap-40 justify-center mt-20 max-md:mt-10 max-md:gap-10">
                        <div className="text-9xl text-white flex-none font-extrabold max-md:text-6xl">10+<span className="block text-2xl font-light mt-3 max-md:text-lg">YEARS OF<br/>EXPERIENCE</span></div>
                        <div className="text-9xl text-white flex-none font-extrabold max-md:text-6xl">99+<span className="block text-2xl font-light mt-3 max-md:text-lg">COMPLETED<br/>PROJECT</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About