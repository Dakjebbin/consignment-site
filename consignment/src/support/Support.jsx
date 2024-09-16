import React from 'react'
import './support.css'
import Footer from '../footer/Footer';

const Support = () => {
  return (
    <div className='support'>
      <div>
        <h4>Feel free to Leave a message</h4>
        <p>
          If you have any questions about what we offer for consumers or for business,
          you can always email us or contact us via the details below. We’ll reply within 24 hours.
        </p>

        <span className='contact'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
          <a href="tel:+1(782)207-9667">+1 (782) 207-9667</a>
        </span>
        <br />
        <span className='contact'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
          </svg>
          <a href="mailto:Support@SwiftshipLogistics.com">Support@SwiftshipLogistics.com</a>
        </span>
      </div>

      <div>
        <form action="">
          <input type="text" placeholder='Your Name' name="name" id="name" required />
          <br />
          <input type="email" placeholder='Your Email' name="email" id="email" required />
          <br />
          <textarea placeholder='Your Message' name="message" id="message" required></textarea>
          <br />
          <button className='support-button' type="submit">Send Message <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg></button>
        </form>
      </div>
    </div>

    
  )
}

export default Support;
