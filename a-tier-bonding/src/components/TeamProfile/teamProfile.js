import {React} from 'react';
import "./teamProfile.css"; 
import Avatar from '@mui/material/Avatar';

function TeamProfile (props) {
  const team_members = props.members; 
  const images = require.context('../../assets/teamprofile', true);
  const {name , pfpPath, description, socialMediaURLS} = team_members[0]; 
  return (
    <div>
      <div>
        {console.log(pfpPath)}
        <Avatar sx={{width: '10vh', height: '10vh'}}src={images(`./${pfpPath}.png`).default}alt ="nothing"/> 
      </div>
    </div>
  )
}

export default TeamProfile; 