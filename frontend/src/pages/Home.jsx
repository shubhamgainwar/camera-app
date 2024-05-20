import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card.jsx";
import camImage from "/camImage.jpg";
import fitnessImage from "/fitnessImage.jpg";
import meetImage from "/meetImage.jpg";
import Meeting from "../components/Meeting/Meeting.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRegister = useSelector((state) => state.auth.isRegister);

  const openCamApp = () => navigate("/cam");
  const openFitnessApp = () => navigate("/fitness");
  const openMeetApp = () => {
    !isAuthenticated
      ? navigate("/meeting")
      : isRegister
      ? navigate("/login")
      : navigate("/register");
  };

  return (
    <div className="container mx-auto  p-12  items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-2/3 mb-2/3">
        <div
          onClick={openCamApp}
          className="cursor-pointer bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-700"
        >
          <Card image={camImage} title="Open Cam App" onClick={openCamApp} />
          <h2 className="text-xl font-bold">Open Cam App</h2>
        </div>
        <div
          onClick={openFitnessApp}
          className="cursor-pointer bg-green-500 text-white p-4 rounded shadow hover:bg-green-700"
        >
          <Card
            image={fitnessImage}
            title="Open Fitness App"
            onClick={openFitnessApp}
          />
          <h2 className="text-xl font-bold">Open Fitness App</h2>
        </div>
        <div
          // onClick={openMeetApp}
          className="cursor-pointer bg-purple-500 text-white p-4 rounded shadow hover:bg-purple-700"
        >
          <Card image={meetImage} title="Open Meet App" onClick={openMeetApp} />
          <h2 className="text-xl font-bold">Open Meet App</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
