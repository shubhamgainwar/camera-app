import React from "react";
import VideoRecorder from "../Video/VideoRecorder";
import meetImage from "/meetImage.jpg";
import Card from "../Card/Card.jsx";

const Meeting = ({ onReady }) => {
  return (
    <div
      // onClick={openMeetApp}
      className="cursor-pointer h-full bg-purple-500 text-white p-4 rounded shadow hover:bg-purple-700 mt-24"
    >
      <Card image={meetImage} title="Work In Progress" />
      <h2 className="text-xl font-bold">Work In Progress</h2>
    </div>
  );
};

export default Meeting;
