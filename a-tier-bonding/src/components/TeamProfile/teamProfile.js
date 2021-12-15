import {React, useState} from 'react';
import "./teamProfile.css"; 
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ProfilePopup from '../ProfilePopup/profilePopup';

function TeamProfile (props) {
  const team_members = props.members; 
  const [open, setOpen] = useState(false);
  const images = require.context('../../assets/teamprofile', true);
  const {name , pfpPath, description, socialMediaURLS} = team_members[0]; 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="profile">
        <div>
          <IconButton onClick={handleClickOpen}>
            <div className="profile-container">  
              <Avatar className="team-profile" sx={{width: '15vh', height: '15vh'}}src={images(`./${pfpPath}.png`).default}alt ="nothing"/> 
              <div className="overlay">
                <p className='overlay-text'> Click here </p> 
              </div>
            </div>
          </IconButton>
        </div>
        <h2> {name} </h2>
        <ProfilePopup
          name={name}
          pfpPath={pfpPath}
          description={description}
          socialMediaURLS={socialMediaURLS}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  )
}

export default TeamProfile; 