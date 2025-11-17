import React from 'react';
import Box from '@mui/material/Box';
import { Parallax } from 'react-parallax';
import fullparty from "../../assets/fullparty.jpg"
import "./aboutUs.css";

function AboutUs() {
  return (
      <Box className="desc-box">
        <Parallax className="desc-box-image" bgImage={fullparty} bgImageAlt="this is fine" strength={200}>
          <h2 className="desc-text"> 
          My, it seems as though you have stumbled upon our humble website! 
          We would like to welcome you to Let’s-a-Game, an annual
          gaming charity marathon where a group of friends play games for
          the power of good. Each event, 120 hours of games, singing, dancing, 
          and silliness is held in an effort to raise as much money as possible 
          for a good cause. Viewers participate directly, talking via live chat, 
          donating towards fun incentives, hanging out and having a good time. 
          Come join us for our 12th event, Let's-A-Game Chaos, in support of the
          Immune Deficiency Foundation, beginning on December 19th 8am EST!
          </h2>
        </Parallax>
      </Box>
  );
}

export default AboutUs;
