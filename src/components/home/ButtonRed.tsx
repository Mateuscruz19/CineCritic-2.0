import Link from "next/link";

export default function ButtonRed() {
  return (<>
  <a
      href="auth"
      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#FF5757] hover:bg-[#C20808] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >
      Comece Aqui
      <svg
        aria-hidden="true"
        className="ml-2 -mr-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  </>
  );
}
