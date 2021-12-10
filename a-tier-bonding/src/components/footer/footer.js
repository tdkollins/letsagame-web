import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./footer.css"
const FootBarStyles = ({
  display: 'flex', 
  justifyContent: 'flex-end',  
  backgroundColor: 'rgb(249, 249, 249)',
  padding: '0vh 10vh 1vh 0vh ',
  borderTop: "3px solid rgb(151, 182, 191)",
});
function Footer() {
  return (
    <div>
      <Box sx={FootBarStyles}>
        <h4> Follow us on social media ! </h4> 
        <Button><SocialIcon url="https://www.youtube.com/channel/UCJHP_c33l2zt8KnRnD3mHrA" style={{ height: 35, width: 35 }}/> </Button>
        <Button><SocialIcon url="https://www.facebook.com/lets.koilins.3" style={{ height: 35, width: 35 }}/> </Button>
        <Button><SocialIcon url="https://twitter.com/Lets_A_Game" style={{ height: 35, width: 35 }}/> </Button>
        <Button><SocialIcon url="https://www.instagram.com/lets_a_game/?hl=en" style={{ height: 35, width: 35 }}/> </Button>
        <Button><SocialIcon url="https://www.twitch.tv/phieki" style={{ height: 35, width: 35 }}/> </Button>
        <Button><SocialIcon url="https://discord.gg/8sHMkkg2" style={{ height: 35, width: 35 }}/> </Button>
      </Box>
    </div>
  );
}

export default Footer;
