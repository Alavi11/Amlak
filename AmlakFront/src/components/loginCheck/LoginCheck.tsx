import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LoginCheck = () => {
  return localStorage.getItem("isLogin") ? <Outlet/> : <Navigate to={"/login"}/>
}

export default LoginCheck