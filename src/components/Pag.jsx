import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'
import Pagi from './pagi'





const Pag = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
 
  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts()
  },[])

  //get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  

  //Change Page

  const paginate = (pageNumber)=> setCurrentPage(pageNumber)
  console.log(posts)
  return (
    <div className=' w-full bg-blue-400'>
        <h1>Products</h1>
        <Post posts={currentPosts} loading={loading}/> 
        <Pagi postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}
export default Pag