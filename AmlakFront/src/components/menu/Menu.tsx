import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return <>
        <div className='w-full h-[96px] flex rtl max-[917px]:flex-col'>
            <div className='w-1/4  flex-grow flex justify-end max-[1231px]:w-2/4 max-[917px]:w-full max-[917px]:justify-center'>
              <img className='w-24 h-24 max-[1231px]:hidden' src='../../dist/images/brand.png'/>
              <p className='hidden max-[1231px]:block text-3xl max-[1231px]:mt-9 max-[917px]:ml-0 ml-16'>آسمان خراش</p>
            </div>
            <ul className='w-1/3 max-[1231px]:w-2/4 max-[1231px]:hidden flex-grow flex items-center justify-around'>
                <Link to={'/'}><li className='hover:cursor-pointer hover:text-rose-600'>خانه</li></Link>
                <li className='hover:cursor-pointer hover:text-rose-600'>جستوجو املاک</li>
                <li className='hover:cursor-pointer hover:text-rose-600'>اخبار</li>
                <li className='hover:cursor-pointer hover:text-rose-600'>تماس با ما</li>
            </ul>
            <div className='w-1/3 max-[1231px]:w-1/4 max-[1231px]:justify-end pl-4 flex-grow flex justify-center items-center max-[917px]:w-full max-[917px]:justify-center pt-3 max-[917px]:pl-0'>
                  <div className='w-32 h-10 bg-white border-[1px] border-[#00AE79] rounded-[30px] flex justify-center items-center hover:bg-[#00AE79] hover:cursor-pointer'>
                      <Link to={"advertisement"}><p className='w-full h-full text-[#00AE79] hover:text-white flex justify-center items-center'>ثبت آگهی</p></Link>
                  </div>
            </div>
        </div>
  </>
}

export default Menu