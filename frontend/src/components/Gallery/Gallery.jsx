import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const images = useSelector((state) => state.media.images);
  const videos = useSelector((state) => state.media.videos);

  return (
    <div className="gallery">
      <h2 className="text-xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Captured ${index}`}
            className="border border-gray-300 rounded-md"
          />
        ))}
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            controls
            className="border border-gray-300 rounded-md"
          ></video>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
