"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "@/components/utils/Pagination";
import MovieItem from "@/components/dashboard/MovieItem";
import { useState } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type Genre = {
  id: number;
  name: string;
};

export default function ShowAllMoviesFromGenrer({ params }: { params: Params }) {
    const GenrerId = params.id;
    // catch the url params and set the genrer id   
    
    
    const [Pages, setPages] = useState(100)
    const [Current, setCurrent] = useState(1)
    const [Movies, setMovies] = useState([])
    const [Genrers, setGenrers] = useState([])
    const [Genrer, setGenrer] = useState<Genre | null>()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA'
      }
    };
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt', options)
      .then(response => response.json())
      .then(response => setGenrers(response.genres))
      .catch(err => console.error(err));

      
      const findGenrerById = (): Genre | null => {
        return Genrers.find((genrer: Genre) => genrer.id === Number(GenrerId)) || null;
      };
  
     const foundGenrer = findGenrerById();
     setGenrer(foundGenrer);
  }, [GenrerId , Genrers ]);
      


   useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${Current}&sort_by=popularity.desc&with_genres=${GenrerId}`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    
   }, [Current, GenrerId]);
    
    
    return(
         <div className= "bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h2 className="text-2xl font-bold mb-4 text-white">{Genrer?.name}</h2>
          <Pagination setCurrent={setCurrent} Current={Current} Pages={Pages} setPages={setPages}/>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
                 {Movies.map((movie, index) => ( 
                <MovieItem movie={movie} key={index} />
            ))}
            <Pagination setCurrent={setCurrent} Current={Current} Pages={Pages} setPages={setPages}/>
                </div>
        </div>
    )
}
    
