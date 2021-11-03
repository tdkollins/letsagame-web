import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Background from '../../assets/background1.jpg'
import './homepage.css'
import YoutubeEmbed from "../../components/YoutubeEmbed/youtubeembed";

const HomeBackground = ({
  display: 'flex',  
  background: `url(${Background})`,
  height: '700px'
});

const HomeMainContainer = ({
  backgroundColor: 'green',
  padding: '3% 0%'
});

const HomeTop = ({
  display: 'flex' 
});
function homepage() {
  return (
    <div>
      <Box sx={HomeBackground}> 
      <Container sx={HomeMainContainer} maxWidth='md' >
        <Box sx={HomeTop}>
          <Box sx={{width: 300}} >
            <h2> Let's-a-Game begins in </h2> 
            <h1> 30 </h1> 
              
          </Box>
          <YoutubeEmbed embedId="eUu9e55VbBg" />
        </Box>
      </Container>
      </Box> 
    </div>

  );
}

export default homepage;