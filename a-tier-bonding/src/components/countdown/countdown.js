import {React} from 'react';
import Box from '@mui/material/Box';
import './countdown.css'
import Timer from 'react-compound-timer'


var t1 = new Date();
var t2 = new Date("2025-01-01T08:00:00.000-05:00");
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
                    <div className='timer-display-unit'>
                      <Timer.Days formatValue={value => value >= 10 ? `${value}`: `0${value}`}/> :
                      <h3> Days </h3>
                    </div>
                    <div className='timer-display-unit'>
                      <Timer.Hours formatValue={value => value >= 10 ? ` ${value}`: ` 0${value}`}/> :
                      <h3> Hours </h3>
                    </div>
                    <div className='timer-display-unit'>
                      <Timer.Minutes  formatValue={value => value >= 10 ? ` ${value}`: ` 0${value}`}/> :
                      <h3> Minutes </h3>
                    </div>
                    <div className='timer-display-unit'>
                      <Timer.Seconds formatValue={value => value >= 10 ? ` ${value}`: ` 0${value}`}/>
                      <h3> Seconds </h3>
                    </div>
                </div>
            )}
          </Timer>
      </Box>    
    </div>

  );
}

export default Countdown;
