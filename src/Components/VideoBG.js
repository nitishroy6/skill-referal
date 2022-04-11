import React from "react";
import video from "../Static/video.mp4";
import "../Styles/videostyle.css";
function VideoBG() {
  return (
    <div className="video-cnt">
      <video src={video} muted loop autoPlay></video>
      <div class="overlay"></div>
    </div>
  );
}

export default VideoBG;
