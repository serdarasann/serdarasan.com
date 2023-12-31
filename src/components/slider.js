import React from "react";


function Slider() {
    return (
        <>
            <div id="setHome" className="Slider">
                <div className="container mx-auto pl-5 pr-5">
                    <div 
                        className="relative flex items-center justify-center pt-32 pb-32 bg-no-repeat bg-center min-h-screen bg-contain before:absolute before:left-0 before:right-0 before:top-0 before:botom-0 before:h-full before:bg-[#464243] before:opacity-60"
                        style={{
                            backgroundImage: "url('serdar-cover.png')",
                        }}
                    >
                        <div className="coverText text-center relative z-10">
                            <div className="title text-7xl text-white font-semibold max-lg:text-6xl">Hello, My name is <span className="font-light text-[#ffcd57]">Serdar<span className="animate-ping text-8xl relative top-2.5 max-lg:top-1.5 max-lg:text-7xl">I</span></span></div>
                            <div className="sub-title text-4xl text-white mt-5">I'm a <span className="font-light">Frontend Developer</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;