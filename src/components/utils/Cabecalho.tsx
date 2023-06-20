export default function Cabecalho() {
    return (<>
    <header className="bg-gray-900">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div>
      <img src="/images/logos/logo1.png" alt="IMDB Logo" className="h-8" />
    </div>
    <nav>
      <ul className="flex space-x-4 text-white">
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Celebs</a></li>
        <li><a href="#">Watchlist</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  </div>
</header>
</>)
};
