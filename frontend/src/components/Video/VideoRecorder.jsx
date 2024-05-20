import React, { useRef, useState, useEffect } from "react";
import * as faceapi from "@vladmandic/face-api";
import "./VideoRecorder.css";

const VideoRecorder = ({ onReady }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
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

    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    };

    const detectFaces = async () => {
      if (videoRef.current && canvasRef.current) {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, {
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        });
        canvasRef.current
          .getContext("2d")
          .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      }
      requestAnimationFrame(detectFaces);
    };

    loadModels().then(() => {
      startCamera();
      detectFaces();
    });

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
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-md mb-4"
        style={{ position: "absolute", top: 0, left: 0 }}
      ></canvas>
    </div>
  );
};

export default VideoRecorder;
