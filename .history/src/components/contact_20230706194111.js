import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

function Contact(){
    return(
        <>
            <section className="relative bg-[#514f50] pt-20 pb-20">
                <div className="container mx-auto">
                    <div className="absolute left-0 -top-[138px] pointer-events-none">
                        <img src="clip-left.png" alt="" />
                    </div>
                    
                    <div before="CONTACT" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-20">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">Get in Touch</div>
                    </div>

                    <div className="flex items-center justify-center">
                        <a target="_blank" href="https://github.com/serdarasann" className=""><AiOutlineGithub /></a>
                        <a target="_blank" href="#" className=""><AiOutlineTwitter /></a>
                        <a target="_blank" href="#" className=""><IoLogoWhatsapp /></a>
                        <a target="_blank" href="#" className=""><AiFillInstagram /></a>
                        <a target="_blank" href="#" className=""><AiFillMail /></a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;

