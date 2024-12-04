import React from "react";
import { Container } from "react-bootstrap";
import YouTube from "react-youtube";

function VideoEmbed({ videoId }) {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <section className="video-embed dark">
      <Container>
        <div className="video-embed__content">
          <h2>Video</h2>
        </div>
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      </Container>
    </section>
  );
}

export default VideoEmbed;
