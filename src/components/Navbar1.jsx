import React, { useState, useEffect, useContext} from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink} from 'react-router-dom'
import useCart from '../hooks/useCart';



const Navbar1 = () => {


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

    const [cart, refetch] = useCart()
    console.log("hello" , cart)





  return (
    <div className=''>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <Link to='cart-page'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 items-center justify-center lg:flex hidden">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
                            </div>
                        </div>
                    </Link>
                    <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">{userData.fname}</a>
                    <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">{userData.email}</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex justify-between items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link to='/userDetails'>Нүүр хуудас</Link>
                        </li>
                        <li>
                           <NavLink to='/company'>Dashboard</NavLink>
                        </li>
                       
                        <li>
                            <NavLink to='/features'>Хэрэглэгч Бараа нэмэх</NavLink>
                        </li>
                        <li>
                            <NavLink to='/team'>Ил талбайн ногоо</NavLink>
                        </li>
                        <li>
                            <NavLink to='/productgreengarden'>Хүлэмжний ногоо</NavLink>
                        </li>
                    </ul>
                    <li className='font-bold list-none'>
                        <NavLink to='/blog'>Блог</NavLink>
                    </li>
                </div>
            </div>
        </nav>
        <div className='w-full h-auto bg-red-500'>
                <Outlet/>
        </div>
    </div>
  )
}

export default Navbar1