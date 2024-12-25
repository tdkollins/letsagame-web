import {React} from 'react';
import Box from '@mui/material/Box';
import './countdown.css'
import {createTimeModel, useTimeModel} from 'react-compound-timer'


var t1 = new Date();
var t2 = new Date("2025-01-01T08:00:00.000-05:00");
var dif = t2.getTime() - t1.getTime();

const timer = createTimeModel({
  initialTime: dif,
  direction: "backward",
});


function Countdown() {
  const { value } = useTimeModel(timer);   
  return (
    <div>
      <Box className="timer-box">
        <h2> Let's-a-Game begins in </h2> 
          <div className="timer-display">
            <div className="timer-display-text"> {value.d >= 10 ? value.d : `0${value.d}`} </div>
            <div className="timer-display-text"> {value.h >= 10 ? value.h : `0${value.h}`} </div>
            <div className="timer-display-text"> {value.m >= 10 ? value.m : `0${value.m}`} </div>
            <div className="timer-display-text"> {value.s >= 10 ? value.s : `0${value.s}`} </div>
          </div>
          <div className="timer-text-box">
            <div className="timer-text-display">
              <h3> Days </h3>
              <h3> Hours </h3>
              <h3> Minutes </h3>
            </div>
            <div className="timer-text-display-seconds">
              <h3> Seconds </h3>
            </div>
          </div>
      </Box>    
    </div>

  );
}

export default Countdown;
