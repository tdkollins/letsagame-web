import React from 'react';
import Box from '@mui/material/Box';
import { Parallax } from 'react-parallax';
import fullparty from "../../assets/fullparty.jpg"
import "./aboutUs.css";

function AboutUs() {
  return (
      <Box className="desc-box">
        <Parallax className="desc-box-image" bgImage={fullparty} bgImageAlt="this is fine" strength={300}>
          <h2> This is a test </h2>
        </Parallax>
      </Box>
  );
}

export default AboutUs;