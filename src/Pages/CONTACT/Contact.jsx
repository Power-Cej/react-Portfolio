import React from 'react';
import './contact.css';

import github from '../../Components/ContactImages/github.png';
import facebook from '../../Components/ContactImages/facebook.png';
import telegram from '../../Components/ContactImages/telegram.png';

const Contact = () => {

  const handleDownload = () => {
    window.location.href = 
    'https://export-download.canva.com/Oa1t4/DAFyf1Oa1t4/278/0-6725413942860789387.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20231228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231228T140907Z&X-Amz-Expires=73140&X-Amz-Signature=c03f510c7cf62983bb33929dd90450330c69d3a7dfb5178eb74c6d094b666dca&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27SysDev_Caballero%2520Ceejay%2520B.pdf&response-expires=Fri%2C%2029%20Dec%202023%2010%3A28%3A07%20GMT';
  }
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

          <button onClick={handleDownload}>Download CV</button>
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
