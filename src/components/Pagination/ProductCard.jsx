import React from 'react'

const ProductCard = ({allProducts, loading}) => {

    if (loading){
        return 
        <h2>Loading...</h2>
    }
  return (
    <div>
       
        {
            allProducts.map(product =>
                <div key={product._id} className='w-50 h-70 rounded-lg bg-green-500 flex flex-col justify-center items-center border-2 border-gray-200'>
                <div className='w-full h-1/2 bg-blue-500'>
                    <img className="w-full h-full" style={{backgroundSize:'cover', backgroundRepeat:'none' }}src={product.imageURL}/>
                </div>
                                        
                <div className='w-full h-1/2'>
                    <li className='text-lg text-black list-none'>{product.name}</li>
                    <li className='list-none'>{product.category}</li>
                    <li className='list-none' >{product.price}</li>
                    <li className='list-none'>{product.desc}</li>
                    <button class='bg-blue-600'>Цааш үзэх</button>
                    </div>
                </div>)
        }


    </div>
  )
}

export default ProductCard