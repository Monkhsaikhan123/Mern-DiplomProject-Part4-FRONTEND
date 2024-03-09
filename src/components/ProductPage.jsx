import React from 'react'

const ProductPage = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className='flex w-full justify-center items-center gap-5 bg-white'>
            {pageNumbers.map(number=>(
                <li key={number}>
                    <a className='text-lg w-10 h-10 cursor-pointer border border-gray-200  bg-blue-400'onClick={()=> paginate(number)}>{number}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductPage