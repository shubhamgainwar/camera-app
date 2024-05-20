import React from "react";

const Card = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
