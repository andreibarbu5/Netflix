import React, { useEffect, useState } from "react";
import thumbnail from "../assets/background.jpg";
import MovieCard from "../components/MovieCard";

const Popular = ({ movies }) => {
  return (
    <div className="pl-8 pt-4 h-full ">
      <div className="flex space-x-4   items-center   h-full rounded-full">
        {movies.map((movie) => (
          <MovieCard key={movie.id} image={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
