import {React, useEffect, useState} from 'react';
import {Dialog, Avatar } from '@mui/material';

function ProfilePopup (props) {
  const { onClose, name , pfpPath, description, socialMediaURLS, open } = props;
  const images = require.context('../../assets/teamprofile', true);
  const [urls, setUrls] = useState([]);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (socialMediaURLS) {
      setUrls(socialMediaURLS); 
    }
  }, [socialMediaURLS]);

  return (
    <Dialog onClose={handleClose} open={open}>
      {console.log(urls)}
      <Avatar variant="square" sx={{width: '20vh', height: '20vh'}}src={images(`./${pfpPath}.png`).default}alt ="nothing"/> 
      <h2> {name} </h2>
      {urls.map((url)=> {
        console.log(url)
      })}
      <p>{description}</p>
    </Dialog>
  )
}

export default ProfilePopup; 