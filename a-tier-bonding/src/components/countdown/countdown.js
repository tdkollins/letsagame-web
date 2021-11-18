import React from 'react';
import Box from '@mui/material/Box';
import './countdown.css'
import Timer from 'react-compound-timer'


var t1 = new Date();
var t2 = new Date("12/19/2021");
var dif = t2.getTime() - t1.getTime();

function Countdown() {
  return (
    <div>
      <Box className="timer-box">
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
    </div>

  );
}

export default Countdown;