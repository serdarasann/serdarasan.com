import React, { useState,useEffect } from 'react';

function Header(){
    const [activeItem, setActiveItem] = useState("setHome");

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth',
        });
        setActiveItem(sectionId);
    };

    return (
    <>
      <header className='fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex-none'>
                    <a href="/" className='block'>
                        <img src="serdar-icon.png" alt="serdarasan.com" />
                    </a>
                </div>
                <div className=''>
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