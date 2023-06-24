export default async function pushMovie(movieId:any) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA'
        }
      };
      
     const movie = await fetch('https://api.themoviedb.org/3/movie/12?language=pt-BR', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        return(movie)
}