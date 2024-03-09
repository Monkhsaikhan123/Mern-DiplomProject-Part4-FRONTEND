import React from 'react'

const ProductMap = ({allProducts, loading}) => {


  return (
    <div className='flex w-full gap-5 bg-white border-4'>
         
         {
            allProducts.map(product =>
                <div key={product._id}>
                <div>
                    <img className="w-80 h-60 rounded border-4" style={{backgroundSize:'cover', backgroundRepeat:'none' }}src={product.imageURL}/>
                </div>
                                        
                <div className='border-4'>
                    <li className="list-none text-base font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</li>
                    <li className="font-normal list-none  text-gray-700 dark:text-gray-400">{product.category}</li>
                    <li className="font-normal list-none  text-black dark:text-gray-400">{product.price}</li>
                    <li className="font-normal list-none  text-gray-700 dark:text-gray-400">{product.desc}</li>
                    <button class='bg-blue-600'>Цааш үзэх</button>
                    </div>
                </div>)
        }

    </div>
  )
}

export default ProductMap