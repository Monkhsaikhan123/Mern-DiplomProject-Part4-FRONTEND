import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/UserDetails'
import Reset from './components/reset'
import Userhome from './components/userhome';
import Updateuser from './components/updateUser';
import Example from './components/example';
import Example1 from './components/example1';
import Chart from './components/Chart';

//navbar import
import Company from './components/Navbar/Company'
import Features from './components/Navbar/Features'
import Team from './components/Navbar/Team'
import Nested from './components/Nested'
import Navbar1 from './components/Navbar1'
import EditProduct from './components/Edit/EditProduct';
import Pag from './components/Pag';
import Products from './components/Products'
import ProductCard from './components/Pagination/ProductCard'
import ProductMap from './components/ProductMap'
import ProductPage from './components/ProductPage'
import Menu from './components/Menu'
import ProductGreenGarden from './components/Navbar/ProductGreenGarden';
import Blog from './components/Navbar/Blog'
import CartPage from './components/CartPage';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')
  return (
   <Router>

      <div className='App'>

            <Routes>
                <Route exact path='/' element={isLoggedIn==='true'?<UserDetails/>: <Login/>}>

                </Route>
                <Route path='/sign-in' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/UserDetails' element={<UserDetails/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/userhome' element={<Userhome/>}/>
                <Route path='/updateuser' element={<Updateuser/>}/>
                <Route path='/menu' element={<Menu/>}/>
              
    {/* Navbar Route */}
                <Route  path='/userDetails' element={<Navbar1/>}>
                  <Route  path='team' element={<Team/>}/>
                  <Route  path='company' element={<Company/>}/>
                  <Route  path='features' element={<Features/>}/>
                  <Route  path='cart-page' element={<CartPage/>}/>
                  <Route  path='sign-in' element={<Login/>}/>
                  <Route  path='productgreengarden' element={<ProductGreenGarden/>}/>
                  
                </Route>
                <Route path='/' element={<Navbar1/>}>
                  <Route  path='team' element={<Team/>}/>
                  <Route  path='company' element={<Company/>}/>
                  <Route  path='features' element={<Features/>}/>
                  <Route path='blog' element={<Blog/>}/>
                  <Route  path='/productgreengarden' element={<ProductGreenGarden/>}/>
                  <Route  path='/cart-page' element={<CartPage/>}/>
                </Route>

     {/* Navbar Route */}
     <Route  path='/userDetails' element={<UserDetails/>}>
             
     </Route>

              <Route path='/editproduct/:id' element={<EditProduct/>}/>

                <Route path='/nested' element={<Nested/>}> </Route>
                <Route path='/example' element={<Example/>}/>
                <Route path='/example1' element={<Example1/>}/>
                <Route path='/chart' element={<Chart/>}/>
                <Route path='/pag' element={<Pag/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/productcard' element={<ProductCard/>}/>
                <Route path='/productmap' element={<ProductMap/>}/>
                <Route path='/productpage' element={<ProductPage/>}/>

            </Routes>

      </div>
   </Router>
  );
}

export default App;
