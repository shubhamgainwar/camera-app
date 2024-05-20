import React from "react";
import { useDispatch } from "react-redux";
import { addImage, addVideo } from "../../redux/slices/mediaSlice";
import VideoRecorder from "../Video/VideoRecorder";
import CaptureButton from "../Buttons/CaptureButton";
import Gallery from "../Gallery/Gallery";
import { useRef, useState } from "react";
import CaptureVideoButton from "../Buttons/CaptureVideoButton";

const Camera = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const handleCaptureImage = (imageData) => {
    dispatch(addImage(imageData));
  };

  const handleCaptureVideo = (videoData) => {
    dispatch(addVideo(videoData));
  };

  const handleVideoReady = (videoElement, stream) => {
    videoRef.current = videoElement;
    setStream(stream);
  };
  return (
    <div className="flex flex-col sm:flex-row p-4 ">
      <div className="w-full sm:w-1/2 p-2">
        <VideoRecorder onReady={handleVideoReady} />
        <div className="flex flex-row ml-48 mt-4">
          <CaptureButton videoRef={videoRef} onCapture={handleCaptureImage} />
          <CaptureVideoButton stream={stream} onCapture={handleCaptureVideo} />
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Gallery />
      </div>
    </div>
  );
};

export default Camera;
