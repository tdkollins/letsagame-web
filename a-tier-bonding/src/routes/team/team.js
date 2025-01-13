import {React, useState, useEffect} from 'react';
import "./team.css"
import TeamProfile from '../../components/TeamProfile/teamProfile'
import CircularProgress from '@mui/material/CircularProgress';
import {getTeamProfiles} from '../../utils'
import { useMediaQuery } from '@mui/material';

const dummyTeamMember = [{
  name: 'Mcnuggies',
  pfpPath: 'dummy',
  description: "here's my blah blah message, here's my blah blah message, here's my blah blah message,here's my blah blah message,here's my blah blah message", 
  socialMediaURLs:{
    twitter: 'https://twitter.com/Lets_A_Game' ,
    instagram: "https://www.instagram.com/lets_a_game/?hl=en",
  }
},
{
  name: 'Mcnuggies2',
  pfpPath: 'dummy2',
  description: "here's my blah blah message, here's my blah blah message, here's my blah blah message,here's my blah blah message,here's my blah blah message", 
  socialMediaURLs:{
    twitch: 'https://www.twitch.tv/phieki' ,
  }
}]; 
function Team() {
  const [loaded, setLoaded] = useState(false); 
  const [teamProfiles, setTeamProfiles] = useState([]);
  const isDesktop = useMediaQuery(('min-width: 1025px'));  
  useEffect(() => {
    if (!loaded) {
      getTeamProfiles().then(profiles => {
        setTeamProfiles(profiles);
        setLoaded(true);
      }) 
    }
  }, [loaded]);

  const rows = [...Array( Math.ceil(teamProfiles.length / 3) )];
    // chunk the products into the array of rows
  const teamRows = rows.map( (row, idx) => teamProfiles.slice(idx * 3, idx * 3 + 3));
  // console.log(teamRows);
  // map the rows as div.row
  const content = teamRows.map((row, idx) => (
      <div className="profile-row" key={idx}>    
        { row.map( member =><div className="member-container"><TeamProfile member={member}/></div>  )}
      </div> )
  );
  // console.log(teamProfiles); 
  const mobileContent = teamProfiles.map((row, idx) => (
    <div> <TeamProfile member={row}/> </div>  
  ));

  return (
    loaded ? 
    // <div className="profiles-container">
    //   {teamProfiles.map((member)=> {
    //     return (
    //       <div className="member-container">
    //       <TeamProfile member={member}/> 
    //       </div> 
    //     )
    //   })}
       
    // </div>
    <div className='profiles-container'>
      {isDesktop? content : mobileContent}
    </div>
    :
    <div className="schedule-loading"> 
      <CircularProgress />
    </div>
  )
}

export default Team; 