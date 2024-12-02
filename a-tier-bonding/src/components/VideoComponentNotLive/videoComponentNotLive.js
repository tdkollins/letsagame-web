import React from 'react';
import Box from '@mui/material/Box';
import YoutubeEmbed from "../YoutubeEmbed/youtubeembed";
import './videoComponentNotLive.css'

function VideoComponentNotLive() {
  return (
    <Box className="video-box">
        <Box className="video-plus-desc-box">
            <Box className="video-desc-box">
                <h2 className="video-desc"> 
                    Benefiting The World 
                    Through The Power Of Play 
                </h2>
            </Box>
            <Box className="video-embed-box">
                <YoutubeEmbed className="video" embedId="ytPLubuB71M" />
            </Box>
        </Box>
    </Box>
  );
}

export default VideoComponentNotLive;
