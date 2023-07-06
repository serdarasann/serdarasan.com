import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';

function Contact(){
    return(
        <>
            <div id="setContact" className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto pl-5 pr-5">
                    <div className="absolute left-0 -top-[138px] pointer-events-none">
                        <img src="clip-left.png" alt="" />
                    </div>
                    
                    <div before="CONTACT" className="Title">
                        <div className="T">Get in Touch</div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <a className="p-2 rounded-full border border-white text-4xl text-white hover:bg-white transition hover:text-[#514f50]" href="https://github.com/serdarasann"><AiOutlineGithub /></a>
                        <a className="p-2 rounded-full border border-white text-4xl text-white hover:bg-white transition hover:text-[#514f50]" href="https://twitter.com/deviziwi"><AiOutlineTwitter /></a>
                        <a className="p-2 rounded-full border border-white text-4xl text-white hover:bg-white transition hover:text-[#514f50]" href="https://wa.me/905466498889"><IoLogoWhatsapp /></a>
                        <a className="p-2 rounded-full border border-white text-4xl text-white hover:bg-white transition hover:text-[#514f50]" href="https://www.instagram.com/serdarasann/"><AiFillInstagram /></a>
                        <a className="p-2 rounded-full border border-white text-4xl text-white hover:bg-white transition hover:text-[#514f50]" href="mailto:serdarasann@gmail.com"><AiFillMail /></a>
                    </div>

                    <div className="mt-10 w-full text-center">
                        <div className="text-white mb-6 font-medium text-2xl">Contact Form</div>
                        <div className="inline-flex flex-col w-full max-w-lg items-center justify-center">
                            <input className="w-full rounded-3xl p-5 mb-6" type="text" placeholder="Name *" />
                            <input className="w-full rounded-3xl p-5 mb-6" type="text" placeholder="Last Name *" />
                            <input className="w-full rounded-3xl p-5 mb-6" type="email"  placeholder="E-Mail Address *" />
                            <textarea className="w-full rounded-3xl p-5 mb-6 resize-none h-40" rows="" cols="" placeholder="Subject *"></textarea>
                        </div>
                        <div className="text-center mt-2">
                            <a className="inline-flex items-center rounded-full border border-white text-white pt-3 pb-3 pl-6 pr-6 transition hover:bg-white hover:text-[#636363]" href="serdarasan-cv.pdf" download>Send <BsSend className="ml-2 text-1xl" /></a>
                        </div>
                    </div>
                </div>
            </div> 
        </> 
    );
}

export default Contact;

