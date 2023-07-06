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
                    
                    <div before="CONTACT" className="text-center relative before:content-[attr(before)] before:pointer-events-none before:text-9xl before:font-semibold before:text-white before:opacity-5 mb-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-medium pb-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-[#ffcd57]">Get in Touch</div>
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
                            <input className="w-full rounded-3xl p-4 mb-6" type="text" name="" value="" placeholder="Name *" />
                            <input className="w-full rounded-3xl p-4 mb-6" type="text" name="" value="" placeholder="Last Name *" />
                            <input className="w-full rounded-3xl p-4 mb-6" type="email" name="" value="" placeholder="E-Mail Address *" />
                            <textarea className="w-full rounded-3xl p-4 mb-6 resize-none" rows="" cols="" placeholder="Subject *"></textarea>
                        </div>
                    </div>
                </div>
            </section> 
        </> 
    );
}

export default Contact;

