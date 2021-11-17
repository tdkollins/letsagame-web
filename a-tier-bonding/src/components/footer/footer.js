import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const FootBarStyles = ({
  display: 'flex', 
  justifyContent: 'flex-end',  
  backgroundColor: 'rgb(249, 249, 249)',
  padding: '0vh 20vh 1vh 0vh ',
  borderTop: "3px solid rgb(151, 182, 191)",
});
function Footer() {
  return (
    <div>
      <Box sx={FootBarStyles}>
        <h4> Follow us on social media ! </h4> 
        <Button href='https://twitter.com/Lets_A_Game'> <TwitterIcon/> </Button>
        <Button> <InstagramIcon/> </Button>
        <Button> <YouTubeIcon/> </Button>
      </Box>
    </div>
  );
}

export default Footer;
