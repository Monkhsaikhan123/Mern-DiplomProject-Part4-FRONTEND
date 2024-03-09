import React, { useState, useEffect, } from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink} from 'react-router-dom'

const Navbar = () => {


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
        };

  return (
    <div>
   
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                    <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">{userData.email}</a>
                    <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Log out</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link to='/'>Home navbar</Link>
                        </li>
                        <li>
                           <NavLink to='company'>Company</NavLink>
                        </li>
                        <li>
                            <NavLink to='team'>Team</NavLink>
                        </li>
                        <li>
                            <NavLink to='features'>Features</NavLink>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar