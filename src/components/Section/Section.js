import React, { useState } from 'react';
import './Section.css';
import imga1 from '../../images/about1.jpg';
import imga2 from '../../images/about2.jpg';
import imga3 from '../../images/about3.jpg';

function Section() {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  const showLess = () => {
    setShowFullParagraph(false);
  };

  return (
    <>
      <div className='about1'>
        <p className='paragraph'>
          <h1>Mentors’ aims at transforming lives by offering the right education and career guidance for students with help of a capable team of professional consultants.</h1>
          {showFullParagraph ? (
            <>
              We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning.
              We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence.
              In addition to that, we also want to play our active roles in contributing to our society. We aim to be the epitome of social awareness by making sure that our students can go abroad and contribute to their own community.
              Even when they come back, they expedite the process of socio-economic development of our very own society. Be it the active contribution to the country’s own GDP or the flow of remittance in the country, we make sure that we can have a sustainable impact on the society and give back to the community that we represent and are proud of being a part of.
              We aspire to be the high-esteemed hallmark of honesty, courage and fair play along with the teamwork of our people and our ability to respond effectively to the positive and productive changes taking place in all aspects of life including communication, skills, technology and environment.
            </>
          ) : (
            <>
              We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning.
              We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence.
              In addition to that, we also want to play our active roles in contributing to our society. We aim to be the epitome of social awareness by making sure that our students can go abroad and contribute to their own community.
              <br />
              <br />
              <button onClick={toggleParagraph}>Read More</button>
            </>
          )}
          {showFullParagraph && (
            <>
              <br />
              <button onClick={showLess}>Show Less</button>
            </>
          )}
        </p>
        <img src={imga1} alt='Event a4' className='about-p' />
      </div>
      <div className='about-web'>
        <div className='a-left'>
          <img src={imga2} alt='Event a5' className='about-p' />
          
            <p className='paragraph'>
              Mentors’  is the most reputed educational institution and admission consulting house dedicated to preparing students in their admissions, standardized tests and academic studies. It’s a student-focused institution that offers a vibrant and inspirational learning environment.<br></br><br></br>Our enviable reputation in preparing students for admission tests of lBA, NSU, EWU and other universities in programs like BBA, CSc., MBA, EMBA, MBM and standardized tests like IELTS, TOEFL, SAT is the testament to our continued tradition of quality<br></br><br></br>Since 1996, our students have continually registered outstanding results in their tests. Our excellent pool of teachers, comprehensive courseware and highest number of practice tests lead towards complete preparation. Dedicated and interactive instructions in small classroom settings for personal care ensure the best results. All these are meant for the test success of our students.</p>
            
          
        </div>
        <div className='a-left'>
          
          
            <p className='paragraph'>
            Mentors’  has also been sending students to different study destinations, e.g. USA, Canada, Australia, New Zealand, UK, Malaysia for the last 5 years with a very good success rate. Our one-stop service that includes initial counselling, admission, scholarship assistance, visa documentation, travelling and accommodation has made us one of the most reputed organizations providing foreign admission services.
<br></br>
Mentors’  is proud to have discerning management with a vision for improvement. We update our program planning, courseware, and services to remain at the forefront of quality service. We welcome valuable suggestions coming from our students and their guardians. This is the secret of our improvement.
<br></br>
Dear STUDENTS, you are at the crossroads of your academic life, make the right choice and ensure better mileage out of every learning effort, like thousand of others who have tremendously benefited from our high-quality programs.
<br></br>
We invite you to visit our campus in person, know about our programs, talk to our students and EXPERIENCE THE DISTINCTIVE SPIRIT OF Mentors’ .</p>
              <img src={imga3} alt='Event a5' className='about-p' />
          
        </div>
      </div>
    </>
  );
}

export default Section;