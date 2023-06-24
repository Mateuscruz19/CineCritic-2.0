import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const featuredMovies = [
    {
        id: 502356,
        title: "Super Mario Bros - O Filme",
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        image:
          "https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/gallery/posterimage1.jpg",
        rating: 8.3,
        genres: ["Crime", "Drama"],
        releaseYear: 2023,
      },
  {
    id: 569094,
    title: "Homem-Aranha:Atraves Do Aranha-Verso",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://www.thecosmiccircus.com/wp-content/uploads/2021/12/atsv-copy-1-e1648959098402.jpg",
    rating: 9.3,
    genres: ["Ação"],
    releaseYear: 2023,
  },
  {
    id: 9615,
    title: "Velozes e Furiosos - Desafio em Tokyo",
    description:
      "Sean Boswell é um piloto de rua que desafia seu rival e bate o carro no fim da corrida. Então, Sean decide se mudar para o Japão em companhia de seu pai para evitar a prisão nos Estados Unidos, já que os rachas não são nada populares com as autoridades. Em Tóquio, ele começa a aprender um excitante e perigoso estilo novo de competir nas ruas. Só que os riscos ficam ainda mais altos quando Sean decide competir com o campeão local e acaba se apaixonando pela namorada dele.",
    image:
      "https://wallpaperstock.net/fast-and-furious_wallpapers_3212_852x480.jpg",
    rating: 6.2,
    genres: ["Crime", "Drama"],
    releaseYear: 2006,
  },
  {
    id: 209112,
    title: 'Batman vs Superman - A Origem Da Justiça',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d3fb2be-ea99-4dd9-99ba-38f82ebf8167/d7x9byf-c4e7dd4b-d1a1-4cee-8842-b44ff6a8498b.jpg/v1/fill/w_960,h_540,q_75,strp/batman_v_superman__dawn_of_justice___fanart_banner_by_aztekgosth864_d7x9byf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvMGQzZmIyYmUtZWE5OS00ZGQ5LTk5YmEtMzhmODJlYmY4MTY3XC9kN3g5YnlmLWM0ZTdkZDRiLWQxYTEtNGNlZS04ODQyLWI0NGZmNmE4NDk4Yi5qcGciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CbQA6j2RWbCQ6HdslcuC_D7AVwBb6H_mgs4lQRo7Nmo',
    rating: 6.8,
    genres: ['Action', 'Adventure', 'Drama'],
    releaseYear: 2016
  },
];

export default function FeaturedMoviesB() {

    const router = useRouter();

  return (
    <section className="">
      <div className="conteiner mx-auto px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {featuredMovies.map((movie, index) => (
            
            <SwiperSlide key={movie.id}>
              <div className="relative">
              <Link key={index} href={`/dashboard/movie/${movie.id}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[90%] rounded-lg shadow-lg"
                />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 bg-opacity-75 rounded-b-lg" >
                <Link key={index} href={`/dashboard/movie/${movie.id}`}>
                  <h3 className="text-lg font-bold mb-1 text-white">{movie.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-400">
                    {movie.releaseYear} | {movie.genres.join(", ")}
                  </p>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
