import React, { useState, useEffect, useRef,} from 'react';
import ProductMap from './ProductMap';
import ProductPage from './ProductPage';

const Products = () => {

    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    useEffect(()=>{
        const fetchPosts = async() => {
            setLoading(true)
            const res= fetch('http://localhost:3000/getProduct',{
            method:"GET"
         })
        .then(res=>res.json())
        .then(data=>setAllProducts(data.data))
            setPosts(res.data)
            setLoading(false) 
        }
      
    },[])
    console.log(allProducts)
    ///get current posts

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost)
    

    //change page 
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='w-full flex flex-col mt-10'>
        <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Бүтээгдэхүүнүүд</h1>
            <ProductMap allProducts={currentPosts} loading={loading}/>
            <ProductPage postsPerPage={postsPerPage} totalPosts={allProducts.length} paginate={paginate}/>
    </div>
  )
}

export default Products