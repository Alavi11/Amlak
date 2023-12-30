import React from 'react'
import { RxCross1 } from "react-icons/rx";
import {useGlobalcontext} from '../../context';
import { Link } from 'react-router-dom';


const ResponsiveMenue = () => {
    const context = useGlobalcontext()
    console.log(context?.showMenu);
    
  return <>
        <div className={`absolute h-screen top-0 ${context?.showMenu ? "right-[0]"  : "right-[100%]" } w-60 bg-white border-l-[1px] border-black`}>
            <div className='w-full flex justify-end p-2 rtl'>
                <RxCross1 className='text-2xl' onClick={()=>{context?.setShowMenu(false)}}/>
            </div>

            <ul className='h-[400px] flex flex-col justify-between w-full rtl'>
                <img className='w-full h-32 mb-3' src='../../dist/images/brand.png'/>
                <Link to={'/'}><li className='mr-3 w-[90%] border-b-[1px] hover:cursor-pointer'>خانه</li></Link>
                <li className='mr-3 w-[90%] border-b-[1px] hover:cursor-pointer'>جستوجو املاک</li>
                <li className='mr-3 w-[90%] border-b-[1px] hover:cursor-pointer'>اخبار</li>
                <li className='mr-3 w-[90%] border-b-[1px] hover:cursor-pointer'>تماس با ما</li>
            </ul>
        </div>
  </>
}

export default ResponsiveMenue