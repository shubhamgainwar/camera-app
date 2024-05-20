import React from "react";

const CaptureButton = ({ videoRef, onCapture }) => {
  const handleCapture = () => {
    if (!videoRef.current) {
      console.error("Video element not found.");
      return;
    }
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    onCapture(dataUrl);
  };

  return (
    <button
      onClick={handleCapture}
      className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 h-10"
    >
      Capture Image
    </button>
  );
};

export default CaptureButton;
