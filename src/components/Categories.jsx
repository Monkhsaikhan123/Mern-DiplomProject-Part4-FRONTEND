import React from 'react'
const categoryItems = [
    {id:1, title:"Main Dish", description:"86inches" , image:'/src/assets/1.jpg'},
    {id:2, title:"Break Dish", description:"12inches" , image:'/src/assets/2.jpg'},
    {id:3, title:"Dessert", description:"48inches" , image:'/src/assets/3.jpg'},
    {id:4, title:"Browse All", description:"255items" , image:'/src/assets/4.jpg'},
]

const Categories = () => {
  return (
    <div className='flex w-full justify-center items-center'>
        <div className='section-container py-16'>
        <div className='text-center'>
            <p className='text-red uppercase tracking-wide font-medium text-lg'>Customers Favorites</p>
            <h3 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Popular Categories</h3>
        
        </div>

        {/* category card */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
           {
            categoryItems.map((item,i)=> (
                <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                    <div className='flex w-full mx-auto items-center justify-center'>
                        <img src={item.image} alt='' className='bg-[#c1f1c6] p-5 rounded-full w-28 h-28'/>
                    </div>
                    <div className='mt-5 space-y-1'>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))
           }
        </div>
    </div>
    </div>
    
  )
}

export default Categories