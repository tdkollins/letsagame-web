import React, { useState } from 'react';
import Box from '@mui/material/Box';
import YoutubeEmbed from "../YoutubeEmbed/youtubeembed";
import './videoComponentNotLive.css'
import trailersData from '../../data/trailers.json';

function VideoComponentNotLive() {
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');
  const currentTrailer = trailersData[currentTrailerIndex];

  const nextTrailer = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationDirection('slide-left');
    
    setTimeout(() => {
      setCurrentTrailerIndex((prevIndex) => 
        prevIndex === trailersData.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationDirection('slide-in-right');
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection('');
      }, 300);
    }, 300);
  };

  const prevTrailer = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationDirection('slide-right');
    
    setTimeout(() => {
      setCurrentTrailerIndex((prevIndex) => 
        prevIndex === 0 ? trailersData.length - 1 : prevIndex - 1
      );
      setAnimationDirection('slide-in-left');
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection('');
      }, 300);
    }, 300);
  };

  return (
    <Box className="video-box">
        <Box className={`video-plus-desc-box ${animationDirection}`} style={{ backgroundColor: currentTrailer.backgroundColor }}>
            <Box className="video-desc-box">
                <h2 className="video-desc"> 
                    Check Out Our Past Trailers!
                </h2>
                <h2 className="event-name">
                    {currentTrailer.eventName}<br/>
                    ({currentTrailer.date})<br/>
                </h2>
            </Box>
            <Box className="video-embed-container">
                <button className="nav-button prev-button" onClick={prevTrailer}>
                    &#8249;
                </button>
                <Box className="video-embed-box">
                    <YoutubeEmbed className="video" embedId={currentTrailer.embedId} />
                </Box>
                <button className="nav-button next-button" onClick={nextTrailer}>
                    &#8250;
                </button>
            </Box>
        </Box>
    </Box>
  );
}

export default VideoComponentNotLive;
