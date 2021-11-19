import {React, Text} from 'react';
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
                <div className="timer-display">
                    <Timer.Days formatValue={value => value >= 10 ? `${value}`: `0${value}`}/> :
                    <Timer.Hours formatValue={value => value >= 10 ? `${value}`: `0${value}`}/> :
                    <Timer.Minutes  formatValue={value => value >= 10 ? `${value}`: `0${value}`}/> :  
                    <Timer.Seconds formatValue={value => value >= 10 ? `${value}`: `0${value}`}/> 
                </div>
            )}
          </Timer>
          <div className="timer-text-display">
            <h3> Days </h3>
            <h3> Hours </h3>
            <h3> Minutes </h3>
            <h3> Seconds </h3>
          </div>
      </Box>    
    </div>

  );
}

export default Countdown;