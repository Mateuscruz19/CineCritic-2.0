'use client';

import React, { useEffect, useState } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { MovieType } from "@/lib/types/movieID";

const MoviePage = ({ params }: { params: Params }) => {
  const movieId = params.id;
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
          options
        );
        const data = await response.json();

        if (response.ok) {
          setMovie(data);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-24">
       {movie ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-1/3 rounded-lg shadow-lg mb-5"
          />
          <h1 className="text-4xl font-bold mb-2 text-white">{movie.title}</h1>
          <p className="text-lg font-medium text-gray-400">
            {movie.release_date.substring(0, 4)} ‧{" "}
            {movie.genres.map((genre) => genre.name).join("/")} ‧{" "}
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </p>
          <p className="text-gray-400 my-2 text-4xl bg-black bg-opacity-50 rounded-lg p-5">
            Nota:
            <span className="text-yellow-400">
              {movie.vote_average.toFixed(1)}
            </span>
          </p>
          <p className="text-gray-400 my-2">
            Popularidade:
            <span className="text-white">{movie.popularity.toLocaleString()}</span>
          </p>
          <p className="text-gray-400 my-2">
            Votos:
            <span className="text-white">{movie.vote_count.toLocaleString()}</span>
          </p>
          <p className="text-gray-400 my-2">
            Idioma:
            <span className="text-white">{movie.original_language}</span>
          </p>
          <p className="text-lg text-gray-400">{movie.overview}</p>
        </div>
      ) : (
        <p className="text-white">Filme não encontrado!</p>
      )}
    </div>
  );
};

export default MoviePage;
