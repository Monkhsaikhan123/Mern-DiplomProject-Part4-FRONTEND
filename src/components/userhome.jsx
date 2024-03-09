
import React, { useState, useEffect, useRef,} from 'react';
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink} from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles/styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Card } from 'flowbite-react';
import Pag from './Pag'
import Products from './Products'
import Tastimonials from './Tastimonials';
import Service from './Service';
import Footer from './Footer'
import ProductsDummy from './ProductsDummy';
import ProductsDummy2 from './ProductsDummy2';
import Categories from './Categories';


export default function Userhome() {


    const navigate = useNavigate()

    const [userData, setUserData] = useState('')

    useEffect(()=>{

        fetch('http://localhost:3000/userData',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type" : 'application/json',
                Accept: 'appilcation/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token")
                
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setUserData(data.data)  
        })
    }, []); 

    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
        setUserData('')
    };
        return(

            <div className='flex justify-center flex-col bg-white'>
                <div>
                    <Navbar1/>
                </div>
                
                <div className='w-full h-auto flex  bg-white border-gray-200 justify-center item-center relative'>
                   
                    <div className='w-4/6 h-80 bg-white border-4 border-gray-200 dark:bg-gray-900'>

                    <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='swiper-slide1 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide2 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide3 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide4 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide5 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide6 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide8 flex justify-end items-end'>
                                <button className='cursor: pointer bg-transparent border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                                <button className='cursor: pointer bg-gray-100 border border-gray-300 text-gray-900 hover:text-green-400 hover:bg-transparent focus:ring-4 focus:ring-gray-200 font-medium text-sm rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 '>Explore More</button>
                            
                            </SwiperSlide>
                    </Swiper>
                       
                    </div>

                    <div className='w-1/6 h-25  space-y-6 flex justify-center  flex-col text-sm items-center border-4 bg-green-200 border-gray-200 dark:bg-gray-900'>
                            <IoPerson onClick={()=>navigate('/updateuser' , {state: userData})}  className='  top-0 w-20 h-20 rounded-full bg-blue-400'/>
                            <h3 className='text-base'><span className='text-center'>{userData.fname}</span>  <span>{userData.lname}</span></h3>
                            <h3 className='text-base'>Хэрэглэгчийн Төрөл: <span className='text-blue-500'>{userData.Usertype}</span></h3>
                            <button className="text-gray-900  bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"onClick={logOut}>Log Out</button>
                            
                    </div>
                   
                </div>
                <Categories/>

                <ProductsDummy/>
                <ProductsDummy2/>

                <Tastimonials/>
                <Service/>
                <Footer/>
            </div>
           
        )
    }