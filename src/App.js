import React from 'react';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import About from './About';
import ContactUs from './ContactUs';
import './NavCSS.css';
import Profile from './Profile';
import WasteDetails from './WasteDetails';
import Products from './Products';
import Cart from './Cart';
import Coupons from './Coupons';
import Home from './Home';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element = {<Profile/>}></Route>
        <Route path='/wastedetails' element = {<WasteDetails/>}></Route>
        <Route path='/products' element = {<Products/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
        <Route path='/coupons' element = {<Coupons/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App