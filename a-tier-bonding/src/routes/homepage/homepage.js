import React from 'react';
import Box from '@mui/material/Box';
import './homepage.css'
import AboutUs from "../../components/AboutUs/aboutUs";
import Countdown from "../../components/Countdown/countdown";
import VideoComponent from "../../components/VideoComponent/videoComponent";

function Homepage() { 
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

export default Homepage;
