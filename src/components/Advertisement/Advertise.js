// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Advertise.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPlane } from '@fortawesome/free-solid-svg-icons';
import img4 from '../../images/gradd2.png';
import img005 from '../../images/recent.png';

function Advertise() {

  const [countryName, setCountryName] = useState('Bangladesh');


  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false, // Set arrows to false to hide navigation arrows
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };



  return (
    <div className='slider-main'>
      <Slider {...settings1}>
        <div className="slider-item">
          <img src={img4} alt='Slide 1' />

        </div>
        <div className="slider-item">
          <img src={img005} alt='Slide 2'  className='img005'/>
        </div>
        {/* Add more slides if needed */}
      </Slider>
      <div className="button-container">
        <button className="button1"><p><h3>Education</h3>Choose from a wide variety of courses that we offer to enhance your academic knowledge and professional skill <br></br>
          <span className='change'><FontAwesomeIcon icon={faGraduationCap} size='lg'  /> ADMISSION ONLINE</span></p></button>
        <button className="button2"><p><h3>Study Abroad</h3>Connect with our partners in the USA, UK, Canada, Australia,and Malaysia and start your higher studies journey

          <br></br><span className='change'><FontAwesomeIcon icon={faPlane} size='lg' /> APPLY ONLINE</span></p></button>
      </div>
    </div>
  );
}

export default Advertise;