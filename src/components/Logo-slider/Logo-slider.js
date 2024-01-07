import React, { useState } from 'react';
import './Logo-slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img01 from '../../images/l1.png';
import img02 from '../../images/l2.png';
import img03 from '../../images/l3.png';
import img04 from '../../images/l4.png';
import img05 from '../../images/l5.png';
import img06 from '../../images/l6.png';
import img07 from '../../images/l7.png';
import img08 from '../../images/l8.png';


function Logoslider() {
  return (
    <>
    <div className='key'>
    <h2>Key Supporters</h2></div>
   <div className='il'>
   <img className="i" src={img01} alt='Image5' />
        <img className="i" src={img02} alt='Image02' />
        <img className="i" src={img03} alt='Image03' />
        <img className="i" src={img04} alt='Image04' />
        <img className="i" src={img05} alt='Image05' />
        <img className="i" src={img06} alt='Image06' />
        <img className="i" src={img07} alt='Image07' />
        <img className="i" src={img08} alt='Image08' />
   </div>
   </>
  );
}
export default Logoslider;