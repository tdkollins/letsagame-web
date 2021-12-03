import React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
 
function Twitch() {
  return (
    <div>
      <TwitchEmbed
        channel="phieki"
        id="phieki"
        theme="dark"
        muted
        width={1280}
        height={720}
        onVideoPause={() => console.log(':(')}
        withChat={false}
      />
      <TwitchChat
        channel="phieki"
        theme="dark"
      />
    </div>
  );
}

export default Twitch;