import React from "react";
import ReactPlayer from "react-player";
import "./YouTubeGrid.css";

export default function YouTubeGrid() {
  const videos = [
    "https://youtu.be/y2Ly5Ijia1E",
    "https://youtu.be/7ULnPiwjOMA",
    "https://www.youtube.com/watch?v=l482T0yNkeo",
    "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    "https://www.youtube.com/watch?v=2vjPBrBU-TM",
    "https://www.youtube.com/watch?v=ktvTqknDobU",
  ];

  return (
    <div className="grid-container">
      {videos.map((url, i) => (
        <div key={i} className="video-wrapper">
          <ReactPlayer url={url} width="100%" height="100%" controls />
        </div>
      ))}
    </div>
  );
}
