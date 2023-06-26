/* eslint-disable @next/next/no-img-element */
import MovieItem from "./MovieItem"
import Link from "next/link"

const popularMovies = [
    {
      id: 155,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      poster_path: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-batman-o-cavaleiro-das-trevas-e-pop-arte-poster/poparteskins2/15938524819/c83767c258ab28fab51a39cc84c5ca28.jpeg',
      vote_average: 8.5,
      genres: ['Ação', 'Crime', 'Drama'],
      release_date: '2008'
    },
    {
      id: 475557,
      title: 'Coringa',
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      poster_path: 'https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_UF894,1000_QL80_.jpg',
      vote_average: 8.2,
      genres: ['Crime', 'Dama', 'Thriller'],
      release_date: '2019'
    },
    {
        id: 76600,
        title: 'Avatar 2',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        poster_path: 'https://assets-prd.ignimgs.com/2022/05/09/avatar-the-way-of-water-poster-1652105534773.jpeg',
        vote_average: 7.7,
        genres: ['Ação', 'Ficção científica'],
        release_date: '2022'
      },
      {
        id: 499701,
        title: 'Dora!',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        poster_path: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce.jpg?v=1577693664',
        vote_average: 6.7,
        genres: ['Comedia', 'Aventura', 'Familia'],
        release_date: '2019'
      },
      {
        id: 447277,
        title: 'Pequena Sereia',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        poster_path: 'https://deadline.com/wp-content/uploads/2023/04/FupVaRaWwAAe7tw.jpg?w=800',
        vote_average: 6.2,
        genres: ['Romance', 'Fantasia', 'Aventura'],
        release_date: '2023'
      },
  ]
  
export default function PopularMovies() {
    return (
      <section className="py-8 ">
        <div className="container mx-auto px-4 bg-opacity-40 rounded-lg bg-black p-5">
          <h2 className="text-2xl font-bold mb-4 text-white">Filmes Populares</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {popularMovies.map(movie => (
               <Link key={movie.id} href={`/dashboard/movie/${movie.id}`}>
               <div  key={movie.id} className="shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-70">
                           <img src={movie.poster_path} alt={movie.title} className="w-full h-64 object-cover" />
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
            ))}
          </div>
        </div>
      </section>
    )
  }