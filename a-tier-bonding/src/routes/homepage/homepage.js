import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './homepage.css'
import YoutubeEmbed from "../../components/YoutubeEmbed/youtubeembed";
import Timer from 'react-compound-timer'

const HomeMain = ({
  marginLeft: '30vh',
  marginRight: '30vh', 
  padding: '5vh 10vh', 
  position: 'center'

});

const HomeTop = ({
  display: 'flex'
});


var t1 = new Date();
var t2 = new Date("12/19/2021");
var dif = t2.getTime() - t1.getTime();

function homepage() {
  return (
    <div className="background">
      <Box sx={HomeMain}   >
        
        <Box>
        <h2> Let's-a-Game begins in </h2> 
        <Timer
            initialTime={dif}
            direction="backward"
        >
            {() => (
                <div>
                    <Timer.Days />  days 
                    <Timer.Hours /> hours
                    <Timer.Minutes /> minutes
                    <Timer.Seconds/> seconds
                </div>
            )}
          </Timer>
        </Box>
        <Box sx={HomeTop}>
          <YoutubeEmbed embedId="eUu9e55VbBg" />
        </Box>
      </Box>
    </div>

  );
}

export default homepage;