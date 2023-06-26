"use client";

import Head from 'next/head'
import FeaturedMoviesB from '@/components/movieComponents/FeaturedMovies'
import PopularMovies from '@/components/movieComponents/popularMovies'
import Cabecalho from '@/components/navbars/Cabecalho';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IMDB Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
   <Cabecalho/>
  <FeaturedMoviesB />
  <PopularMovies />
</main>
    </div>
  )
}