import React, { useEffect, useState } from 'react';
import {getGames} from '../../utils'
import CircularProgress from '@mui/material/CircularProgress';
import "./schedule.css"

function Schedule() {
  const [loaded, setLoaded] = useState(false); 
  const [schedule, setSchedule] = useState([]); 

  useEffect(() => {
    if (!loaded) {
      getGames().then(schedule => {
        setSchedule(schedule);
        setLoaded(true);
      }) 
    }
  }, [loaded]);
  return (
    loaded ? 
    <div className="schedule">
      <h2>Schedule: All Times EST</h2>
      <div className="schedule-table">
        <table id='name'>
          <thead>
          <tr>
            <th> Game </th>
            <th className="left-border"> Start Time </th>
            <th className="left-border"> End Time </th>
            <th className="left-border"> Players </th>
          </tr>
          </thead>
          <tbody>
            {schedule.map((activity) => {
              const { name, startTime , endTime , gamePlayers } = activity //destructuring
              const startTimeEST = new Date(startTime).toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric', hour:'2-digit',minute: '2-digit' })
              const endTimeEST = new Date(endTime).toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric', hour:'2-digit',minute: '2-digit' })
              return (
                <tr key={name}>
                  <td className="schedule-table-first">{name}</td>
                  <td className="schedule-table-rest">{startTimeEST}</td>
                  <td className="schedule-table-rest">{endTimeEST}</td>
                  <td className="schedule-table-rest">{gamePlayers.join(', ')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
       
    </div> 
    : 
    <div className="schedule-loading"> 
      <CircularProgress />
    </div>
  );
}

export default Schedule;