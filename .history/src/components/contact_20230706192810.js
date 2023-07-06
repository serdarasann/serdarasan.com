import React from "react";

function Contact(){
    return(
        <>
            <section className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto">
                    <div className="absolute left-0 -top-[138px] pointer-events-none">
                        <img src="clip-left.png" alt="" />
                    </div>
                    
                    <div before="CONTACT" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-20">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">My Skills</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;