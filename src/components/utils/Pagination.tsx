import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages } :any) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <nav className="flex justify-center my-4">
      {!isFirstPage && (
        <Link href={`/?page=${prevPage}`}>
          <a className="px-3 py-2 bg-blue-500 text-white rounded-md mr-2">
            Previous
          </a>
        </Link>
      )}

      {!isLastPage && (
        <Link href={`/?page=${nextPage}`}>
          <a className="px-3 py-2 bg-blue-500 text-white rounded-md ml-2">
            Next
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;