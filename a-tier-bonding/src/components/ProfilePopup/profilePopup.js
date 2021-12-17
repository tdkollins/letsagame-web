import {React, useEffect} from 'react';
import { SocialIcon } from 'react-social-icons';
import {Dialog, Avatar, Box } from '@mui/material';
import "./profilePopup.css"

function ProfilePopup (props) {
  const { onClose, name , pfpPath, description, socialMediaURLs, open } = props;
  const images = require.context('../../assets/teamprofile', true);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
  }, [socialMediaURLs]);

  return (
      <Dialog onClose={handleClose} open={open} >
        <Avatar variant="square" sx={{minWidth: "40vh", minHeight: "40vh", maxWidth:"40vh", maxHeight:"40vh"}}src={images(`./${pfpPath}.png`).default}alt ="nothing"/> 
        <Box sx={{padding: '0vh 2vh'}}>
          <h2 className="pp-name"> {name} </h2>
          {socialMediaURLs? 
          <div className="pp-socialmedia">
            {socialMediaURLs.instagram? <SocialIcon className="pp-socialmedia" url={socialMediaURLs.instagram} style={{ height: 35, width: 35 }}/> : null }
            {socialMediaURLs.twitter? <SocialIcon className="pp-socialmedia"url={socialMediaURLs.twitter} style={{ height: 35, width: 35 }}/> : null }
            {socialMediaURLs.twitch? <SocialIcon className="pp-socialmedia" url={socialMediaURLs.twitch} style={{ height: 35, width: 35 }}/> : null }
            {socialMediaURLs.tikTok? <SocialIcon className="pp-socialmedia" url={socialMediaURLs.tikTok} style={{ height: 35, width: 35 }}/> : null }
          </div>
          : null}
          <p className="pp-description">{description}</p>
        </Box>
      </Dialog>
  )
}

export default ProfilePopup; 