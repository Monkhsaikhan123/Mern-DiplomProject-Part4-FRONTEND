import React, { useState, useEffect, useRef,} from 'react';

import Footer from '../Footer'


const Blog = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white'>
      <div className='w-10/12'>
          <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
              
                {/* Text    */}
                <div className='md:w-1/3 space-y-7 px-4'>
                        <h1 className='md:text-5x1 text-4xl font-bold md:leading-snug leading-snug'>
                            Lorem ipsum dolor sit amet consectetur
                        </h1>
                        <p className='text-xl text-[#4A4A4A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sit!</p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Мэдээлэл оруулах</button>
                </div>

                <div className="md:w-2/3 carousel carousel-end rounded-box">
                   <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
                    </div>  
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
                    </div>
                    </div>
            </div>
        </div>
      </div>

       
       <Footer/>
    </div>
  )
}

export default Blog