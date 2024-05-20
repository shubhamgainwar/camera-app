import React, { useRef, useEffect } from "react";

const VideoRecorder = ({ onReady }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          if (onReady) {
            onReady(videoRef.current, stream);
          }
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  return (
    <div className="video-recorder">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="border border-gray-300 rounded-md mb-4"
      ></video>
    </div>
  );
};

export default VideoRecorder;
