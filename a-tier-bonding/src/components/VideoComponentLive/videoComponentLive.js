import React from 'react';
import Box from '@mui/material/Box';
import './videoComponentLive.css'
import Twitch from '../Twitch/Twitch';

function VideoComponentLive() {
  return (
    <Box className="video-box">
        <Twitch />
    </Box>
  );
}

export default VideoComponentLive;
