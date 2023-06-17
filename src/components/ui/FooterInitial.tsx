export default function FooterInicial() {
  return (
<footer className="fixed bottom-0 bg-black opacity-70 rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200">© 2023 <a href="https://flowbite.com/" className="hover:underline">CineCritic™</a>. Todos os direitos reservados. 
    </span>
    <ul className="flex flex-wrap items-center mt-3 ml-5 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Políticas De Privacidade</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licenciamento</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contato</a>
        </li>
    </ul>
    </div>
</footer>

  );
}
