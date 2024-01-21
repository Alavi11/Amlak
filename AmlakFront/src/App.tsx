import React, { useState } from 'react';
import {useGlobalcontext} from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reg_Log from './components/reg_log/Reg_Log';
import Menu from './components/menu/Menu';
import { CiMenuBurger } from "react-icons/ci";
import Home from "./components/home/Home"
import ResponsiveMenue from './components/menu/ResponsiveMenue';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Advertisement from './components/advertisement/Advertisement';
import LoginCheck from './components/loginCheck/LoginCheck';
import AdvDetails from './components/advertisement/AdvDetails';
import Search from './components/search/Search';
import Dashboard from './components/dashboard/Dashboard';
import EditAndDeleteAdv from './components/editandDeleteAdv/EditAndDeleteAdv';



function App() {

  const context = useGlobalcontext()
  const defaultProps = {profileStore:{}}


  return <>
    <BrowserRouter>
      <div className='sticky z-10 top-0 hidden max-[1231px]:flex w-full bg-black h-10 items-center justify-end p-3'>
          <CiMenuBurger className='text-white text-3xl border-[2px] border-white rounded-[5px] rtl' onClick={()=>{context?.setShowMenu(true)}}/>
          <ResponsiveMenue/>
      </div>
      <Reg_Log/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="search" element={<Search/>}/>
        <Route element={<LoginCheck/>}>
            <Route path="advertisement" element={<Advertisement/>}/>
            <Route path="advertisement/detail/:advPostcode" element={<AdvDetails/>}/>
            <Route path="dashboard" element={<Dashboard/>}>
              <Route path="edit" element={<EditAndDeleteAdv/>}/>
            </Route>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}

export default App;
