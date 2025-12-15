import React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
 
function Twitch() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <TwitchEmbed
        channel="phieki"
        id="phieki"
        theme="dark"
        muted
        width={1400}
        height={720}
        onVideoPause={() => console.log(':(')}
        withChat={true}
      />
    </div>
  );
}

export default Twitch;