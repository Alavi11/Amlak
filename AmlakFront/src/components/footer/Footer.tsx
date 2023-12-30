import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return <>
        <div className='w-full h-96 bg-[#2C2C2C] flex flex-col justify-center items-center'>
                <div className='w-52 h-24 flex justify-center items-center mb-8'>
                    <div className='w-1/3 flex justify-center'>
                        <FaTelegramPlane className='w-10 h-10 rounded-[10px] bg-white flex items-center justify-center p-1 hover:cursor-pointer hover:w-12 hover:h-12'/>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <PiInstagramLogoFill className='w-10 h-10 rounded-[10px] bg-white flex items-center justify-center p-1 hover:cursor-pointer hover:w-12 hover:h-12'/>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <SiGmail className='w-10 h-10 rounded-[10px] bg-white flex items-center justify-center p-1 hover:cursor-pointer hover:w-12 hover:h-12'/>
                    </div>
                </div>

                <div className='w-60 flex justify-between items-center'>
                        <img className='w-[65px] h-16 rounded-xl'  src='../../dist/images/footer/1.png'/>
                        <img className='bg-white rounded-xl' src='../../dist/images/footer/2.png'/>
                        <img className='bg-white rounded-xl' src='../../dist/images/footer/3.png'/>
                </div>

                <div className='w-50 flex flex-col items-center justify-center mt-6'>
                        <img className='w-32' src='../../dist/images/footer/4.png'/>
                        <p className='text-white mt-3'>دفتر مرکزی</p>
                        <p className='text-white'>تهران - دانشگاه شهید رجایی</p>
                </div>
        </div>
  </>
}

export default Footer