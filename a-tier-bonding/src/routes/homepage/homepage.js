import React from 'react';
import Box from '@mui/material/Box';
import './homepage.css'
import YoutubeEmbed from "../../components/YoutubeEmbed/youtubeembed";
import AboutUs from "../../components/about-us/aboutUs";
import Countdown from "../../components/countdown/countdown";

function homepage() { 
  return (
    <div className="background">
      <Box  className="home-box" >
        <Box className="video-box">
          <YoutubeEmbed embedId="eUu9e55VbBg" />
        </Box>
        <Countdown/>   
        <AboutUs/>
      </Box>
    </div>

  );
}

export default homepage;