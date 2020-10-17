import React from 'react';

interface Props {
next: boolean;
prev: boolean;
handlePagination (action: 'prev' | 'next'): void
}

export default function Pagination({handlePagination, prev, next}: Props) {
  return <div>
         
      <button className='btn btn-left' onClick={() => handlePagination('prev')} disabled={!prev}>Previous page</button>
      <button className='btn btn-right' onClick={() => handlePagination('next')} disabled={!next}>Next page</button>
      
  </div>;
}
