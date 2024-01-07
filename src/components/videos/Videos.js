import React, { useState } from 'react';
import './Videos.css';

function Videos() {
  const videos = [
    { source: 'grad2.png'},
    { source: '/videos/video1.mp4', text: "Mentors' your one-stop hub for IELTS." },
    { source: '/videos/video2.mp4', text: 'Mentors’ Study Abroad at a glance' },
    { source: '/videos/video3.mp4', text: 'Useful Pronunciation Tips (Part 2)' },
    { source: '/videos/video4.mp4', text: 'Student’s Testimonial – Edith Cowan University & Edith Cowan College' },
    { source: '/videos/video5.mp4', text: 'Why IBA BBA Admission Preparation at Mentors’?' },
  ];
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (index) => {
    setSelectedVideo(selectedVideo === index ? null : index);
  };

  return (
    <div className="video-grid">
      {videos.map((item, index) => (
        <div
          key={index}
          className={`video-container ${selectedVideo === index ? 'selected' : ''}`}
          onClick={() => handleVideoClick(index)}
        >
          {index === 0 ? (
            <img
              className="photo"
              src={item.source}
              alt="Photo"
            />
          ) : (
            <>
              <video
                className="video"
                src={item.source}
                controls={selectedVideo === index}
                autoPlay={false}
                loop={true}
              />
              <div className="overlay">
                {/* Text to be displayed over the overlay */}
                <p className="overlay-text">{item.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Videos;