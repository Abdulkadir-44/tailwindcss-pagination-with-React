import axios from 'axios'
import Data from './data/countries.json'
import { useState } from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
  
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);

  const indexOfLastPost=currentPage * postsPerPage ;
  const indexOfFirstPost=indexOfLastPost - postsPerPage ;
  const currentPosts=Data.slice(indexOfFirstPost,indexOfLastPost);

  const paginate=(pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className='text-center pb-3 mt-4 text-white mb-6 border-b-2 font-bold text-4xl'>COUNTRIES</h1>
        <Posts posts={currentPosts}/> 
        <Pagination totalPosts={Data.length} postsPerPage={postsPerPage} paginate={paginate}/>
    </div>
  )
}

export default App
