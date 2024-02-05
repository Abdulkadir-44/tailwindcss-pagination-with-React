import React from 'react'

const Posts = ({ posts }) => {

    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {
                posts.map((post,index)=>(
                    <div className='scrollbar w-60 h-56 relative bg-blue-300 border rounded-md p-3 overflow-auto'>
                        <div className='mb-2'>
                                <img className='w-full h-32 rounded-md transform hover:scale-110 hover:cursor-pointer duration-200' src={post.flags.png} alt="" />
                        </div>
                        <p className='text-xs'><span className='font-bold'>Name :</span> {post.name.official}</p>
                        <p><span className='text-sm font-bold'>Capital : </span>{post.capital}</p>
                    </div>
                ))
            }
        </div>
  )
}

export default Posts