import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MovieItem({ movie }: any) {

    const router = useRouter()
    const apiImageKey = 'https://image.tmdb.org/t/p/w500'


    return (<>
    <Link href={`/dashboard/movie/${movie.id}`}>
    <div  key={movie.id} className="shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-70">
                <img src={apiImageKey + movie.poster_path} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                  <p className="text-sm text-white">{movie.release_date.slice(0, 4)}</p>
                  <div className="text-yellow-400 font-bold">{movie.vote_average.toFixed(1)}</div>
                </div>
                <div className="py-2 px-4 flex justify-between items-center">
                  
                  <button className="bg-[#FF5757] text-white py-2 px-4 rounded-lg">Saber Mais</button>
                </div>
              </div>
              </Link>
    </>)
};
