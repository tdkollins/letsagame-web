import React from 'react';
import Box from '@mui/material/Box';
import './homepage.css'
import AboutUs from "../../components/about-us/aboutUs";
import Countdown from "../../components/countdown/countdown";
import VideoComponent from "../../components/VideoComponent/videoComponent";

function homepage() { 
  return (
    <div className="background">
      <Box  className="home-box" >
        <VideoComponent/>
        <Countdown/>   
        <AboutUs/>
      </Box>
    </div>

  );
}

export default homepage;