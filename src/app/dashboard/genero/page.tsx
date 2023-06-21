"use client";

import { useEffect, useState } from "react";
import Gender from "@/components/utils/Gender";
import Pagination from "@/components/utils/Pagination";

export default function Genero() {

    const [Genders, setGenders] = useState([])
    const [Pages, setPages] = useState(1)
    const [Current, setCurrent] = useState(1)

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
            .then(response => setGenders(response.genres))
            .catch(err => console.error(err));
        
    }, []);

    return(<>
     <div className= "items-center justify-center bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
        <p className="text-white text-2xl mb-5">Generos</p>
        <Pagination setCurrent={setCurrent} Current={Current} Pages={Pages} setPages={setPages}/>
        <div className="grid grid-cols-4 gap-4">
        {Genders.map((gender, index) => ( 
                <Gender key={index} gender={gender} />
            ))}  
        </div>
     </div>
    </>)
};
