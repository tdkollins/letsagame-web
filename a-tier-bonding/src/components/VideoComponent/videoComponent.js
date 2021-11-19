import React from 'react';
import Box from '@mui/material/Box';
import YoutubeEmbed from "../../components/YoutubeEmbed/youtubeembed";
import './videoComponent.css'

function VideoComponent() {
  return (
    <Box className="video-box">
        <box className="video-plus-desc-box">
            <box className="video-desc-box">
                <h2 className="video-desc"> 
                    Benefiting The World 
                    Through The Power Of Play 
                </h2>
            </box>
            <box className="video-embed-box">
                <YoutubeEmbed className="video" embedId="eUu9e55VbBg" />
            </box>
        </box>
    </Box>
  );
}

export default VideoComponent;