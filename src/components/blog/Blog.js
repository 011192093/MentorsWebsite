import React from 'react';
import './Blog.css';
import imgb1 from '../../images/media.jpg';
import imgb2 from '../../images/med.png';
import imgb3 from '../../images/med2.png';
import imgb4 from '../../images/map.jpg';

function Blog() {
    return (
        <div className='blog-container'>

            <div className='blog-title'>
                <h1 className='blog'>WELCOME TO OUR BLOG</h1>
                <p>Your Journey to Excellence Starts Here</p>
            </div>
            <div className='blog-container2'>
                <div className='blog-content'>
                    {/* Side Section - Upcoming Events and News */}
                    <div className='side-section'>
                        <h2 className='box'>Upcoming Events and News</h2>
                        {/* Placeholder for multiple small cards */}
                        <div className='b-card'>

                            <div className='card-image'>
                                <img src={imgb4} alt='Event 4' className='blog-p' />
                            </div>
                            <div className='card-content'>
                                <h5>Title 3</h5>
                                <p>Date: March 10, 2023</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className='b-card'>

                            <div className='card-image'>
                                <img src={imgb3} alt='Event 3' className='blog-p' />
                            </div>
                            <div className='card-content'>
                                <h5>Title 4</h5>
                                <p>Date: April 5, 2023</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className='b-card'>

                            <div className='card-image'>
                                <img src={imgb3} alt='Event 3' className='blog-p' />
                            </div>
                            <div className='card-content'>
                                <h5>Title 4</h5>
                                <p>Date: April 5, 2023</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                         <div><br></br><br></br></div>

                        
                        <h2 className='box'>Recent Events and News</h2>
                        {/* Placeholder for multiple small cards */}
                        <div className='b-card'>

                            <div className='card-image'>
                                <img src={imgb1} alt='Event 1' className='blog-p' />
                            </div>
                            <div className='card-content'>
                                <h5>Title 1</h5>
                                <p>Date: January 1, 2023</p>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className='b-card'>

                            <div className='card-image'>
                                <img src={imgb2} alt='Event 2' className='blog-p' />
                            </div>
                            <div className='card-content'>
                                <h5>Title 2</h5>
                                <p>Date: February 15, 2023</p>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className='b-card'>
                            <h6>+view more</h6>
                        </div>

                        {/* Add more cards as needed */}
                    </div>


                </div>



                <div className='watch'>

                    <h1 className='all-events'>All Events</h1>
                    <div className='watch-grid'>
                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ Study... </p>
                            <button className='ReadMore'>Read More</button>
                        </div>

                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ Study Abroad Uttara ...</p>
                            <button className='ReadMore'>Read More</button>
                        </div>


                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ Study Abroad Uttara Campus 1....
                                </p>
                            <button className='ReadMore'>Read More</button>
                        </div>


                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ ...</p>
                            <button className='ReadMore'>Read More</button>
                        </div>


                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ Study Abroad Uttara Campus 1 on 11th December ...</p>
                            <button className='ReadMore'>Read More</button>
                        </div>


                        <div className='event-card'>
                            <img src={imgb1} alt='Event 1' className='event-p' />
                            <p>Date: 7th JAnuary 2024</p>
                            <p>Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one of Australia’s top institutions of higher education.
                                Md Majadul Alam, Regional Coordinator (South Asia) at Macquarie University, will visit Mentors’ Study Abroad....</p>
                            <button className='ReadMore'>Read More</button>
                        </div>



                    </div>
                    <button className='SeeMore'>See All</button>
                </div>
            </div>

        </div>
    );
}

export default Blog;