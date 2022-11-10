import Image from "next/image";
import React from "react";

const MovieCard = ({ image }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="   text-white ">
      <div className="rounded-full bg-black  shadow-lg hover:shadow-gray-900/50 ">
        <img
          src={API_IMG + image}
          className="object-cover min-w-[9rem] rounded-[0.5rem] hover:-mt-3 hover:scale-105   ease-out hover:shadow-2xl shadow-white"
        />
      </div>
    </div>
  );
};

export default MovieCard;
