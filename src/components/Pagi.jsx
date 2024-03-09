import React from 'react'

const pagi = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div>
        <nav>
            <ul className="pagination flex justify-center items-center gap-10">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)}className="page-link" href={`#${number}`}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default pagi