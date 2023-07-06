import React, { useState,useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';


function Header(){
    const [scroll, setScroll] = useState(0);
    const [activeItem, setActiveItem] = useState("setHome");

    useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 87,
            behavior: 'smooth',
        });
        setActiveItem(sectionId);
    };

    return (
    <>

      <header className={`${scroll > 0 ? 'backdrop-blur-md bg-[#514f50]/30' : ''} transition fixed top-0 left-0 right-0 z-20`}>
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex-none'>
                    <a href="/" className='block'>
                        <img src="serdar-icon.png" alt="serdarasan.com" />
                    </a>
                </div>
                <div className=''>
                    <div className='text-white p-2 text-3xl'><RxHamburgerMenu/></div>
                    <ul className='flex items-center gap-10'>
                        <li 
                            onClick={() => handleClick('setHome')}
                            className={`${activeItem === 'setHome' ? 'active ' : ''} cursor-pointer text-white font-medium hover:opacity-80 pt-2 pb-2 relative`}>Home
                        </li>
                        <li 
                            onClick={() => handleClick('setAbout')} 
                            className={`${activeItem === 'setAbout' ? 'active ' : ''} cursor-pointer text-white font-medium hover:opacity-80 pt-2 pb-2 relative`}>About
                        </li>
                        <li 
                            onClick={() => handleClick('setSkills')} 
                            className={`${activeItem === 'setSkills' ? 'active ' : ''} cursor-pointer text-white font-medium hover:opacity-80 pt-2 pb-2 relative`}>Skills
                        </li>
                        <li 
                            onClick={() => handleClick('setContact')} 
                            className={`${activeItem === 'setContact' ? 'active ' : ''} cursor-pointer text-white font-medium hover:opacity-80 pt-2 pb-2 relative`}>Contact
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
      </header>
    </>
    )
    
}

export default Header