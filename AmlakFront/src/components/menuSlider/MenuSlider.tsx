import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import formatCarrency from '../../util';
import { Link } from 'react-router-dom';


const MenuSlider = () => {

    const [adv , setAdv ] = useState<object[]>([])

    const url = "http://localhost:3001"

    useEffect(()=>{
        axios.get("http://localhost:3001/api/advertisement")
        .then((res)=>{
            setAdv(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? adv.length-1 : prevIndex - 3));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= adv.length - 3 ? 0 : prevIndex + 3));
    };



  return <>
        <div className='w-full h-[400px] max-[1165px]:h-[450px] bg-gray-100 flex justify-around'>
            <button className='max-[1165px]:hidden max-[1165px]:overflow-x-scroll h-full w-8' onClick={prevSlide}><IoIosArrowBack className='w-12 h-12 rounded-[50%] flex justify-center items-center hover:bg-red-700'/></button>
            <div className="w-[1300px] max-[1165px]:w-full  max-[1460px]:w-[1200px] max-[1360px]:w-[1100px] max-[1260px]:w-[1000px] flex flex-col justify-around items-center">
                <p className='text-2xl text-rose-600'>جستجو در املاک</p>
                <div className='w-full flex justify-around max-[1360px]:justify-between max-[1260px]:justify-center max-[1165px]:hidden'>
                    {
                    adv.slice(currentIndex, currentIndex + 3).map((item:any, index) => (
                        <Link to={`advertisement/detail/${item.postcode}`}><div className='w-[320px] mx-16 h-[280px] shadow-xl rounded-[10px] flex-shrink-0 max-[1360px]:w-[250px] relative'>
                            <img className='w-full h-[190px] rounded-t-[10px]' key={index} src={`${url}/${item.photo}`} alt={`Slide ${index + 1}`} />
                            <small className='absolute top-2 left-2 text-lg'>{item.rate} : امتیاز</small>
                            <div className='w-full h-8 border-b-[1px] border-black flex justify-between rtl items-center'>
                                <p className='border-l-[1px] border-black px-2 w-1/3'>{item.melktype}</p>
                                <p className='border-l-[1px] border-black px-2 w-1/3'>{item.masahat} متر</p>
                                <p className='px-2 w-1/3'>{item.otagh} خواب</p>
                            </div>
                            <div className='w-full h-14 flex rtl'>
                                <div className='w-[60%] h-full flex justify-start pr-1 items-center border-l-[1px] border-black'>
                                    <p className='text-sm'>قیمت : {formatCarrency(item.gheimat)} تومان</p>
                                </div>
                                <div className='w-[40%] h-full flex justify-start items-center'>
                                    <p className='flex text-sm'><GrLocation size={"20px"} />{item.address}</p>
                                </div>
                            </div>
                        </div></Link>
                    ))
                    }
                </div>
                <div className='hidden max-[1165px]:flex w-full overflow-x-scroll flex-nowrap'>
                    {
                    adv.map((item:any, index) => (
                        <div className='mb-10 w-[310px] max-[375px]:w-[300px] h-[280px] mx-2 shadow-xl rounded-[10px] flex-shrink-0'>
                            <img className='w-full h-[190px] rounded-t-[10px]' key={index} src={`${url}/${item.photo}`}/>
                            <small className='absolute top-2 left-2 text-lg'>{item.rate} : امتیاز</small>
                            <div className='w-full h-8 border-b-[1px] border-black flex justify-between rtl items-center'>
                                <p className='border-l-[1px] border-black px-2 w-1/3'>{item.melktype}</p>
                                <p className='border-l-[1px] border-black px-2 w-1/3'>{item.masahat} متر</p>
                                <p className='px-2 w-1/3'>{item.otagh} خواب</p>
                            </div>
                            <div className='w-full h-14 flex rtl'>
                                <div className='w-[60%] h-full flex justify-start pr-1 items-center border-l-[1px] border-black'>
                                    <p className='text-sm'>قیمت : {formatCarrency(item.gheimat)} تومان</p>
                                </div>
                                <div className='w-[40%] h-full flex justify-start items-center'>
                                    <p className='flex text-sm'><GrLocation size={"20px"} />{item.address}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <button className='max-[1165px]:hidden h-full w-8' onClick={nextSlide}><IoIosArrowForward className='w-12 h-12 rounded-[50%] flex justify-center items-center hover:bg-red-700'/></button>
        </div>
  
  </>
}

export default MenuSlider