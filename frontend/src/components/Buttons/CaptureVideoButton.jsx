import React, { useState, useRef } from "react";

const CaptureVideoButton = ({ stream, onCapture }) => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const handleStartRecording = () => {
    if (!stream) {
      console.error("Media stream not available.");
      return;
    }

    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/webm; codecs=vp8",
    });
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.current.push(event.data);
      }
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "video/webm" });
      const videoUrl = URL.createObjectURL(blob);
      onCapture(videoUrl);
      chunks.current = [];
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };
  return (
    <div>
      {recording ? (
        <button
          onClick={handleStopRecording}
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Stop Recording
        </button>
      ) : (
        <button
          onClick={handleStartRecording}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Start Recording
        </button>
      )}
    </div>
  );
};

export default CaptureVideoButton;
