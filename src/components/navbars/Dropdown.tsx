/* eslint-disable @next/next/no-img-element */
import Search from "./Search";

export default function Dropdown() {
    return (<>
    <nav className="fixed top-0 z-50 w-full border-b bg-[#111827] border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <a href="/pages/dashboard/home" className="flex ml-2 md:mr-24">
          <img src="/images/logos/logo5.png" className="h-8 mr-1" alt="CineCritic Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowraptext-white"> <span className="text-[#FF5757]">C</span>ine<span className="text-[#FF5757]">C</span>ritic </span>
        </a>
      </div>
      <Search/>
      <div className="flex items-center">
          <div className="flex items-center ml-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>
    </>)
}