"use client";

import PopularMovies from "@/components/utils/popularMovies"
import { useEffect, useState } from "react";
import MovieItem from "@/components/dashboard/MovieItem";
import Pagination from "@/components/utils/Pagination";

export default function Popular() {

    const [popularMovies, setPopularMovies] = useState([])
    const [Pages, setPages] = useState(100)
    const [Current, setCurrent] = useState(1)

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-Br&page=${Current}`, options)
            .then(response => response.json())
            .then(response => setPopularMovies(response.results))
            .catch(err => console.error(err));

            console.log(popularMovies)
    }, [Current]);

    return (<>
        <div className= "bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h2 className="text-2xl font-bold mb-4 text-white">Filmes Populares</h2>
          <Pagination setCurrent={setCurrent} Current={Current} Pages={Pages} setPages={setPages}/>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
                {popularMovies.map((movie, index) => ( 
                <MovieItem movie={movie} key={index}/>
            ))}
            <Pagination setCurrent={setCurrent} Current={Current} Pages={Pages} setPages={setPages}/>
                </div>
        </div>
    </>)
};
