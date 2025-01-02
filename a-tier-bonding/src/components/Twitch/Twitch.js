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
        width={"100%"}
        height={400}
        onVideoPause={() => console.log(':(')}
        withChat={true}
      />
    </div>
  );
}

export default Twitch;