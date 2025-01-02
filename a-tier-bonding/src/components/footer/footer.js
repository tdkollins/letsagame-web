import { Button, useMediaQuery } from '@mui/material';
import { Box, display } from '@mui/system';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./footer.css"

const FooterStyleDesktop = ({
  backgroundColor: 'rgb(249, 249, 249)',
  padding: '0vh 10vh 1vh 0vh ',
  borderTop: "3px solid rgb(151, 182, 191)",
  display: 'flex', 
  justifyContent: 'center',  
  alignItems: 'center',
})

const FooterStyleMobile = ({
  backgroundColor: 'rgb(249, 249, 249)',
  padding: '0vh 10vh 1vh 0vh ',
  borderTop: "3px solid rgb(151, 182, 191)",
  display: 'flex', 
  justifyContent: 'center',  
  alignItems: 'center',
  width: '100%'
})

function Footer() {
  const isDesktop = useMediaQuery('(min-width:1025px)');
  const size = isDesktop? 35: 20; 
  const isTiny = useMediaQuery('(max-width:320px)');
  return (
    <div>
      <Box  sx={isDesktop? FooterStyleDesktop: isTiny? FooterStyleMobile: FooterStyleDesktop }>
        {isDesktop ? <h4> Follow us on social media ! </h4> : null} 
          <SocialIcon url="https://www.youtube.com/channel/UCJHP_c33l2zt8KnRnD3mHrA" style={{ height: size, width: size , marginLeft: size}}/> 
          {/* <SocialIcon url="https://www.facebook.com/lets.koilins.3" style={{ height: 35, width: 35 }}/>  */}
          <SocialIcon url="https://www.tiktok.com/@letsagame" style={{ height: size, width: size,  marginLeft: size }}/> 
          <SocialIcon url="https://bsky.app/profile/letsagame.bsky.social" style={{ height: size, width: size,  marginLeft: size }}/> 
          <SocialIcon url="https://twitter.com/Lets_A_Game" style={{ height: size, width: size ,  marginLeft: size}}/> 
          <SocialIcon url="https://www.instagram.com/lets_a_game/?hl=en" style={{ height: size, width: size,  marginLeft: size}}/> 
          <SocialIcon url="https://www.twitch.tv/phieki" style={{ height: size, width: size ,  marginLeft: size}}/> 
          <SocialIcon url="https://discord.gg/bASgcdu" style={{ height: size, width: size ,  marginLeft: size}}/> 
      </Box>
    </div>
  );
}

export default Footer;
