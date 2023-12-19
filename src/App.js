import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index';
import AddProducts from './components/addproducts';
import ViewProducts from './components/viewproducts';
import EditProducts from './components/editproducts';
import ContactUs from './components/contactus';
import Payments from './components/payments';
import SignIn from './components/signin';
import AddBanner from './components/addbanners';
import ViewBanners from './components/viewbanners';
import EditBanners from './components/editbanners';
import Users from './components/users';
function App() {
  return (
    <Router>
      <Routes>      
        <Route path='/' element={<Index/>}/>     
        <Route path='/addproducts' element={<AddProducts/>}/>     
        <Route path='/addbanners' element={<AddBanner/>}/>     
        <Route path='/viewproducts' element={<ViewProducts/>}/> 
        <Route path='/viewbanners' element={<ViewBanners/>}/> 
        <Route path='/editproducts' element={<EditProducts/>}/>
        <Route path='/editbanners' element={<EditBanners/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
