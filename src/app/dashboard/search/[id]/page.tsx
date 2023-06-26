'use client';

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import MovieItem from "@/components/movieComponents/MovieItem";
import { useRouter } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export default function Search({ params }: { params: Params }) {

    const router = useRouter()
    const search = params.id;

    const [moviesFind, setMoviesFind] = useState([])
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
          
            fetch(`https://api.themoviedb.org/3/search/movie?language=pt-Br&query=${search}&page=${Current}`, options)
            .then(response => response.json())
            .then(response => setMoviesFind(response.results))
            .catch(err => console.error(err));

            console.log(moviesFind)
    }, [Current]);




        

    return(<>
     <div className= "bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h2 className="text-2xl font-bold mb-4 text-white">Resultado Da Sua Pesquisa:</h2>
        {moviesFind.length ? (
  <>
    <Pagination
      setCurrent={setCurrent}
      Current={Current}
      Pages={Pages}
      setPages={setPages}
    />
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
      {moviesFind.map((movie, index) => (
        <MovieItem movie={movie} key={index} />
      ))}
    </div>
    <Pagination
      setCurrent={setCurrent}
      Current={Current}
      Pages={Pages}
      setPages={setPages}
    />
  </>
) : (
  <h1 className="text-2xl font-bold mb-4 text-white">Nenhum Filme Encontrado</h1>
)}
        </div>
    </>)
};
