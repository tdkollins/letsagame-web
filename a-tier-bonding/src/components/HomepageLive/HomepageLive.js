import React from 'react';
import Box from '@mui/material/Box';
import './homepage.css'
import AboutUs from "../../components/AboutUs/aboutUs";
import Countdown from "../../components/countdown/countdown";
import VideoComponentNotLive from "../../components/VideoComponentNotLive/videoComponentNotLive";

function HomepageLive() { 
  return (
    <div className="background">
      <Box  className="home-box" >
        <VideoComponentNotLive/>
        <Countdown/> 
        <AboutUs/>
      </Box>
    </div>

  );
}

export default HomepageLive;
