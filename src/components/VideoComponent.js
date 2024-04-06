import React from 'react';
import video from "../Assets/WhatsApp Video 2024-04-06 at 15.05.39_fd4a3558 (1).mp4";
import "../styles/last.css";

const VideoComponent = () => {
  return (
    <div className='lst'>
      <video controls width="500">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
