import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Reg_Log = () => {

  const handleExit = () =>{
      localStorage.clear();
      window.location.reload()
  }

  return <>
        <div className='w-full bg-gray-100 rtl py-1 max-[320px]:pr-2'>
            {
               localStorage.getItem("isLogin") ?<ul className='flex w-[30%] justify-end'>
               <li className='hover:cursor-pointer border-l-[1px] border-black ml-2 pl-3 w-10' onClick={handleExit}>خروج</li>
               <Link to={"dashboard"}><li className='w-14'>داشبورد</li></Link>
               </ul>  :<ul className='flex w-[30%] justify-end'>
                    <Link to={"login"}><li className='border-l-[1px] border-black ml-2 pl-2 w-8'>ورود</li></Link>
                    <Link to={"register"}><li className='w-14'>ثبت نام</li></Link>
                </ul> 
            }
        </div>
  </>
}

export default Reg_Log