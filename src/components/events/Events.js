import React, { useState } from 'react';
import './Events.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const eventsData = [
  {
    date: 'January 10, 2024',
    title: 'Event 1',
    description: 'Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one...',
    image: 'event1.png',
  },
  {
    date: 'February 15, 2024',
    title: 'Event 2',
    description: 'Formerly known as Ryerson University, Toronto Metropolitan University is a public ...',
    image: 'event2.png',
  },
  {
    date: 'March 15, 2024',
    title: 'Event 3',
    description: 'Description for Event 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'event3.png',
  },
  {
    date: 'May 18, 2024',
    title: 'UK Open Day with Navitas',
    description: "Event by Mentors' Study Abroad Duration: 3 hr Public  · Anyone on or off Facebook If you are looking for a pathway to...",
    image: 'event4.png',
  },
  {
    date: 'june 20, 2024',
    title: 'Event 5',
    description: 'Ranked 130th in the latest QS World University Rankings and located in Sydney, Macquarie University is globally recognized as one...',
    image: 'event1.png',
  },
  {
    date: 'January 10, 2024',
    title: 'Event 6',
    description: 'Formerly known as Ryerson University, Toronto Metropolitan University is a public...',
    image: 'event2.png',
  },
  // Add more events as needed
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
   
  ],
  prevArrow: (
    <button type="button" className="custom-slick-arrow slick-prev">
      &#8592; {/* Left arrow character */}
    </button>
  ),
  nextArrow: (
    <button type="button" className="custom-slick-arrow slick-next">
      &#8594; {/* Right arrow character */}
    </button>
  ),
};

function Events() {
  const [visibleEvents, setVisibleEvents] = useState(4);
  const [dateRange, setDateRange] = useState('');

  


  return (
    <div className="events-container">
      <h1>Take a Look at Our Events</h1>
      <Slider {...settings}>
        {eventsData.map((event, index) => (
          <div key={index} className={`event-card ${index < visibleEvents ? 'visible' : ''}`}>
            <div className="event-image">
              <img src={event.image} alt={`Event ${index + 1}`} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="time-span-indicator">
        <p>{dateRange}</p>
      </div>
     
    </div>
  );
}

export default Events;