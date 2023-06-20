"use client";

import Head from 'next/head'
import FeaturedMoviesB from '@/components/utils/FeaturedMovies'
import PopularMovies from '@/components/utils/popularMovies'
import Cabecalho from '@/components/utils/Cabecalho';

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