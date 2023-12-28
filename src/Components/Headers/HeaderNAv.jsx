import React from 'react'

import './headernav.css'

import github from '../../Components/HomeImages/github.png';
import listview from '../../Components/HomeImages/listview.png';

const HeaderNAv = () => {
    
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
      };


  return (
    <>
    <div className="position">
            <div className="dropdown">
                <img className="dropbtn" onClick={myFunction} src={listview} />
                <div id="myDropdown" className="dropdown-content">
                <a className='anchor' href="#works">Works</a>
                <a className='anchor' href="#contact">Contact</a>
                    <a className='anchor' href="https://github.com/Power-Cej" target="_blank"><img
                            style={{height: '40px', width: '40px', filter: 'brightness(0) invert(1)',}}
                            src={github} /></a>
                    
                </div>
            </div>
        </div>
        <nav>
            <a className='anchor' href="https://github.com/Power-Cej" target="_blank"><img src={github} className="github" /></a>
            <a className='anchor' href="#contact">Contact</a>
            <a className='anchor' href="#works">Works</a>
        </nav>
        <div className="home">
            <a className='anchor' href="/">POWER-CEJ</a>
        </div>
        </>
  )
}

export default HeaderNAv