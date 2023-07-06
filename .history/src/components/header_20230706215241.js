import React, { useState,useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';


function Header(){
    const [scroll, setScroll] = useState(0);
    const [activeItem, setActiveItem] = useState("setHome");
    const [isOpen, setIsOpen] = useState(false);

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

      <header className={`${scroll > 0 ? 'sm:backdrop-blur-md bg-[#514f50]/30 max-sm:bg-[#514f50]/80' : ''} transition fixed top-0 left-0 right-0 z-20`}>
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex-none'>
                    <a href="/" className='block'>
                        <img src="serdar-icon.png" alt="serdarasan.com" />
                    </a>
                </div>
                <div className='text-right'>
                    <div className='text-white p-2 text-3xl inline-block'><RxHamburgerMenu/></div>
                    <ul className='sm:flex sm:items-center max-sm:text-left gap-10 max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:bg-white max-sm:w-2/3 max-sm:gap-2 max-sm:p-6 max-sm:h-full max-sm:transition max-sm:translate-y-full'>
                        <li 
                            onClick={() => handleClick('setHome')}
                            className={`${activeItem === 'setHome' ? 'active ' : ''} menuItem`}>Home
                        </li>
                        <li 
                            onClick={() => handleClick('setAbout')} 
                            className={`${activeItem === 'setAbout' ? 'active ' : ''} menuItem`}>About
                        </li>
                        <li 
                            onClick={() => handleClick('setSkills')} 
                            className={`${activeItem === 'setSkills' ? 'active ' : ''} menuItem`}>Skills
                        </li>
                        <li 
                            onClick={() => handleClick('setContact')} 
                            className={`${activeItem === 'setContact' ? 'active ' : ''} menuItem`}>Contact
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