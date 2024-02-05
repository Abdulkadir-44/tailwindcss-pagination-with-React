import React from 'react'

const Pagination = ({totalPosts,postsPerPage,paginate}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumber.push(i);
    }
  return (
    <nav>
        <ul className='flex gap-2 justify-center mt-5'>
            {
                pageNumber.map((number,index)=>(
                    <li key={index}>
                        <a className='bg-blue-400 px-2 py-1 rounded-xl text-white flex items-center justify-center hover:bg-blue-700 duration-200' 
                        onClick={()=>paginate(number)} 
                        href="#">{number}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination