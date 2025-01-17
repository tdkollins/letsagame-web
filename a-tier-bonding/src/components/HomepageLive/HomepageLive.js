import React from 'react';
import Box from '@mui/material/Box';
import './homepage.css'
import AboutUs from "../../components/AboutUs/aboutUs";
import VideoComponentLive from "../../components/VideoComponentLive/videoComponentLive";

function HomepageLive() { 
  return (
    <div className="background">
      <Box  className="home-box" >
        <VideoComponentLive/>
        <AboutUs/>
      </Box>
    </div>

  );
}

export default HomepageLive;
