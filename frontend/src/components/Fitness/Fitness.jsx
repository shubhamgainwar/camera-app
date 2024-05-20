import React from "react";
import VideoRecorder from "../Video/VideoRecorder";

const Fitness = () => {
  return (
    <div className="flex flex-col sm:flex-row p-4 ">
      <div className="w-full sm:w-1/2 p-2 ">
        <VideoRecorder />
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <iframe
          width="100%"
          height="380"
          src="https://www.youtube.com/embed/nardrbgqZ00?si=S8C5lWf6KyzLT-SW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Fitness;
