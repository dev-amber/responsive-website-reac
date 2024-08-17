import React, { useRef } from 'react';
import './VideoPlayer.css';  // Make sure your CSS file path is correct
import video from '../../assets/college-video.mp4';  // Adjust path to your video file

const VideoPlayer = ({playState, setPlayState}) => {

  const player=useRef(null);
  const closePlayer=(e)=>{
    if(e.target== player.current){
setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState? '':'hide'} `} ref={player} onClick={closePlayer}> 
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

