import React from 'react';
import './Footer.css';
import img4 from '../../images/gradd1.png';
import img5 from '../../images/faceboook.png';
import img6 from '../../images/twitter.png';
import img7 from '../../images/insta.png';
import img8 from '../../images/linkedin.png';
import img9 from '../../images/youtube.png';
import img10 from '../../images/google.png';

function Footer() {
  return (
    <>
      <div className='mfooter'>
        <div className='felement'>
          <h6>Contact Us</h6>
          <div>
            <select className="locations">
              <option value="Dhaka">Dhaka</option>
              <option value="KalaBagan">KalaBagan</option>
              <option value="Banani">Banani</option>
              <option value="Mouchak">Mouchak</option>
              <option value="Mirpur">Mirpur</option>
              <option value="Uttara Campus 1">Uttara Campus 1</option>
              <option value="Uttara Campus 2">Uttara Campus 2</option>
            </select>
          </div>
          <div>
            <p>Rajshahi</p>
            <p>Sylhet</p>
            <p>Chattogram</p>
            <p>MoulaviBazar</p>
            <p>Khulna</p>
            <p>Rangpur</p>
          </div>
          <div>
            <select className="locations">
              <option value="Outside">Outside Bangladesh</option>
              <option value="USA">USA</option>
              <option value="Austraia">Australia</option>
            </select>
          </div>
        </div>

        <div className='felement'>
          <h6>Mentors'</h6>
          <p>Blog</p>
          <p>Videos</p>
          <p>Publications</p>
          <p>Fees</p>
          <p>Site map</p>
          <p>Career</p>
        </div>

        <div className='felement'>
          <h6>Legal</h6>
          <p>Privacy Policy</p>
          <p>Franchise</p>
          <p>Rules and regulation</p>
          <p>Feedback</p>
        </div>
        <div className='felement'>
        <h6>Apply</h6>
          <p>Admission Online(Education)</p>
          <p>Apply Online(Study Abroad)</p>
          </div>
        <div className='felement'>
          <h6>Leave a Message</h6>
          <form className='message'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
            
            <button type="submit">Submit</button>
          </form>
          <div>

          </div>
        </div>
      </div>
      <div className='pre-icon'>
      <p>Copyright © 1996 - 2023. All Rights Reserved by Mentors'.</p>
      <div className='icons'>
        
        <img className="icn" src={img5} alt='Image5' />
        <img className="icn" src={img6} alt='Image6' />
        <img className="icn" src={img7} alt='Image7' />
        <img className="icn" src={img8} alt='Image8' />
        <img className="icn" src={img9} alt='Image9' />
        <img className="icn" src={img10} alt='Image10' />
    

      </div>
      </div>
    </>
  );
}

export default Footer;