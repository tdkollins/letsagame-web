import React, { useEffect, useState } from 'react';
import {getGames} from '../../utils'
import CircularProgress from '@mui/material/CircularProgress';
import "./schedule.css"
import { useMediaQuery } from '@mui/material';

function Schedule() {
  const [loaded, setLoaded] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const isDesktop = useMediaQuery('(min-width:1025px)')

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
      <h2>Schedule: Times Shown in Local Timezone</h2>
      {isDesktop? 
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
      : 
      <div>
        {schedule.map((activity) => {
          const { name, startTime , endTime , gamePlayers } = activity //destructuring
          const startTimeEST = new Date(startTime).toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric', hour:'2-digit',minute: '2-digit' })
          const endTimeEST = new Date(endTime).toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric', hour:'2-digit',minute: '2-digit' })
          
          return (
            <div className='schedule-mobile-main'> 
              <div className='schedule-mobile-name'> {name} </div>
              <div className='schedule-mobile-time'> {startTimeEST} - {endTimeEST} </div> 
              <div className='schedule-mobile-player'> Players: {gamePlayers.join(', ')} </div>
            </div> 
          )
        })

        }
      </div> 
      }
    </div>
    :
    <div className="schedule-loading">
      <CircularProgress />
    </div>
  );
}

export default Schedule;