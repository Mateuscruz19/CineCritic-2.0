const popularMovies = [
    {
      id: 1,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: 9.0,
      genres: ['Action', 'Crime', 'Drama'],
      releaseYear: 2008
    },
    {
      id: 2,
      title: 'Ela(She)',
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      image: 'https://br.web.img2.acsta.net/pictures/20/06/11/22/00/1049159.jpg',
      rating: 8.8,
      genres: ['Action', 'Adventure', 'Drama'],
      releaseYear: 2015
    },
    {
        id: 3,
        title: 'Avatar 2',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        image: 'https://assets-prd.ignimgs.com/2022/05/09/avatar-the-way-of-water-poster-1652105534773.jpeg',
        rating: 8.8,
        genres: ['Action', 'Adventure', 'Drama'],
        releaseYear: 2022
      },
      {
        id: 4,
        title: 'Sucession',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        image: 'https://br.web.img3.acsta.net/r_1280_720/pictures/18/05/18/10/14/5494165.jpg',
        rating: 8.8,
        genres: ['Action', 'Adventure', 'Drama'],
        releaseYear: 2020
      },
      {
        id: 5,
        title: 'Pequena Sereia',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        image: 'https://deadline.com/wp-content/uploads/2023/04/FupVaRaWwAAe7tw.jpg?w=800',
        rating: 8.8,
        genres: ['Action', 'Adventure', 'Drama'],
        releaseYear: 2020
      },
  ]
  
export default function PopularMovies() {
    return (
      <section className="py-8 ">
        <div className="container mx-auto px-4 bg-opacity-40 rounded-lg bg-black p-5">
          <h2 className="text-2xl font-bold mb-4 text-white">Filmes Populares</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {popularMovies.map(movie => (
              <div key={movie.id} className="shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-70">
                <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                  <p className="text-sm text-white">{movie.releaseYear} | {movie.genres.join(', ')}</p>
                  <div className="text-yellow-400 font-bold">{movie.rating.toFixed(1)}</div>
                </div>
                <div className="py-2 px-4 flex justify-between items-center">
                  
                  <button className="bg-[#FF5757] text-white py-2 px-4 rounded-lg">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }