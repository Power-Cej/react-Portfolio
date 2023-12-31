import React, { useEffect } from 'react'

import './headernav.css'

import github from '../../Components/HomeImages/github.png';
import listview from '../../Components/HomeImages/listview.png';

const HeaderNAv = () => {
    
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
      };


      useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        // Listen for hash changes and scroll to the target element
        window.addEventListener('hashchange', handleHashChange);
    
        // Scroll to the target element when the component mounts
        handleHashChange();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);


      
  return (
    <>
    <div className="position">
            <div className="dropdown">
                <img className="dropbtn" onClick={myFunction} src={listview} />
                <div id="myDropdown" className="dropdown-content">
                <a className='anchor' href="/#works">Works</a>
                <a className='anchor' href="/#contact">Contact</a>
                    <a className='anchor' href="https://github.com/Power-Cej" target="_blank"><img
                            style={{height: '40px', width: '40px', filter: 'brightness(0) invert(1)',}}
                            src={github} alt='GITHUB' /></a>
                    
                </div>
            </div>
        </div>
        <nav>
            <a className='anchor' href="https://github.com/Power-Cej" target="_blank"><img src={github} className="github" alt='GITHUB'/></a>
            <a className='anchor' href="/#contact">Contact</a>
            <a className='anchor' href="/#works">Works</a>
        </nav>
        <div className="home">
            <a className='anchor' href="/">POWER-CEJ</a>
        </div>
        </>
  )
}

export default HeaderNAv