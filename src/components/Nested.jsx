import React from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink} from 'react-router-dom'

const Nested = () => {
  return (
    <div className='flex gap-6'>
        <NavLink to='features'>features</NavLink>
        <NavLink to='team'>team</NavLink>
        <NavLink to='company'>Company</NavLink>

        <Outlet/>
    </div>
  )
}

export default Nested