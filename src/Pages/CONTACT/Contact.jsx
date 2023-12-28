import React from 'react';
import './contact.css';

import github from '../../Components/ContactImages/github.png';
import facebook from '../../Components/ContactImages/facebook.png';
import telegram from '../../Components/ContactImages/telegram.png';

const Contact = () => {
  return (
    <>
    <div className='contactContent'>
    <div className='contact-left'>
      <div className='contact-details'>
        <h3>CONTACT</h3>
        <p>
          Feel free to contact me by submitting the form below and I will get back to you
          as soon as possible, or you can just find me here:
        </p>

        <div className='contact-link'>
        <a className='anchor' href="https://github.com/Power-Cej" target="_blank">
          <img src={github} alt='GITHUB'/>
          </a>

          <a className='anchor' href="https://www.facebook.com/caballero880" target="_blank">
          <img src={facebook} alt='FACEBOOK'/>
          </a>

          <a className='anchor' href="https://web.telegram.org/k/#@cejCaballero" target="_blank">
          <img src={telegram} alt='TELEGRAm'/>
          </a>

          <button>Download CV</button>
        </div>
      </div>
    </div>

    <div className='contact-right'>
      <div className='contat-email'>
      <form action="mailto:caballeroceejay5@gmail.com?subject=Contact%20Form" method="post" encType="text/plain">
            <div className="contact-field">
                <label className="contact-label">
                    Name
                </label>
                <input required placeholder="Enter Your Name" type="text" className="contact-input" name="name" id="name"/>
            </div>
    
            <div className="contact-field">
                <label className="contact-label">
                    Email
                </label>
                <input required placeholder="Enter Your Email" type="email" className="contact-input" name="email" id="email"/>
            </div>
    
            <div className="contact-field">
                <label className="contact-label">
                    Message
                </label>
                <textarea required placeholder="Enter Your Message" className="contact-input" id="message" rows="10" name="message"></textarea>
            </div>
            <button type="submit" id="button">Submit</button>
        </form>
      </div>
</div>

    </div>
    </>
  )
}

export default Contact
