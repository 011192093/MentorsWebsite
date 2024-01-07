import React, { useState } from 'react';
import './Prime-service.css';
import img11 from '../../images/p1.png';
import img12 from '../../images/p2.png';
import img13 from '../../images/p3.png';
import img14 from '../../images/p4.png';




function Prime_service() {

  return (
    <>
    <div className='a-title'><h1>Voices of Appreciation: A Sculpting Success</h1></div>
      <div className='article'>
        <div className='person'>
        <img className="11" src={img11} alt='Image11' />
          <h6>Syeda Yamila<br></br>
            University of Windsor, Canada</h6>
            <p>"  Throughout my application and visa process, the support I received from Mentors’ SA is praiseworthy. The level of ownership in their work, touched me. In fact, visiting Mentors’ SA office would feel like visiting family. They aren’t just trustworthy, but go the extra mile."
            </p>

        </div>
        <div className='person'>
        <img className="12" src={img12} alt='Image12' />
          <h6>Rashidur Rahman<br></br>
            Ashland University, USA</h6><p>"  I would like to thank Mentors’ Study Abroad for helping me throughout the whole process of getting admission and visa, because they provided me support at every step of the way in a well-organized manner. To those who want to study abroad, I would definitely recommend Mentors’ SA."
          </p>

        </div>
        <div className='person'>
        <img className="13" src={img13} alt='Image13' />
          <h6>
            Adita Rahman<br></br>
            Memorial University, Canada</h6><p>"  The whole process of application and visa procedure with the support of Mentors’ Study Abroad went very smoothly. I could not have expected better. Indeed, I highly recommend Mentors’ Study Abroad."
            </p>

        </div>
        <div className='person'>
        <img className="14" src={img14} alt='Image14' />
        <h6>Gulap Shah Fahim<br></br>
            Curtin College, Australia</h6>
          <p>"  Mentors’ SA helped me a lot in my journey by showing me the right way to proceed, as a result of which I got my admission, and visa to Australia."
            
            </p>
        </div>
      </div></>
  )

}

export default Prime_service;


