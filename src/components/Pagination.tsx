import React from 'react';
import Link from 'next/link';
import { BiChevronLeftSquare } from 'react-icons/bi';
import { BiChevronRightSquare } from 'react-icons/bi';

const Pagination = ({ setCurrent, Current, Pages } :any) => {
  const isFirstPage = Current === 1;
  const isLastPage = Current === Pages;

  function Plus() {
    if(!isLastPage){
      setCurrent(Current+1)
    }
  }

  function Minus(){
    if(!isFirstPage){
      setCurrent(Current-1)
    }
  }

  return (
    <nav className="flex justify-center mb-5  bg-opacity-20 p-1 rounded-xl">
          <BiChevronLeftSquare color='#4169e1' size={25} onClick={Minus} className='cursor-pointer'/>
          <p className='mx-5 text-white'>{Current}</p>
          <BiChevronRightSquare color='#4169e1' size={25} onClick={Plus} className='cursor-pointer'/>
    </nav>
  );
};

export default Pagination;