import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import formatCarrency from '../../util'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import EditAndDeleteAdv from '../editandDeleteAdv/EditAndDeleteAdv'

const Dashboard = () => {

    // const test = [1,1,1,1,1,1,1,1,1,1,1]

    const [myAdv , setMyAdv] = useState([])
    const [code , setCode] = useState<number>(0)
    const url = "http://localhost:3001"

    useEffect(()=>{
        axios.get("http://localhost:3001/api/advertisement/myadv",{
            headers:{
                "Accept" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res:any)=>{
            console.log(res.data);
            if(res.data.isAdv){
                setMyAdv(res.data.data)
                console.log(res.data.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const sendPostcode = (code:any)=>{
        setCode(code)
    }



  return <>
        <div className="w-full flex flex-col h-[820px] max-[917px]:mt-8">
                <div className='w-full h-[50px] rtl flex items-center justify-center'>
                        <p className='text-xl'>آگهی های من</p>
                </div>
                <div className='w-full h-full flex max-[1024px]:flex-col'>
                    <div className='w-2/3 h-[770px] flex px-28 py-10 flex-wrap justify-center overflow-y-scroll max-[1024px]:w-full max-[1024px]:order-2 max-[1024px]:mt-10'>
                        {
                            myAdv.map((item:any, index) => (
                                <Link to={"edit"} onClick={(e)=>{sendPostcode(item.postcode)}}><div className='mb-10 w-[310px] max-[375px]:w-[300px] h-[280px] mx-2 shadow-xl rounded-[10px] flex-shrink-0 relative'>
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
                                </div></Link>
                            ))
                        }
                    </div>
                    <div className='w-1/3 h-full max-[1024px]:h-[100px] max-[1024px]:w-full'>
                            <Outlet context={[code]}/>
                    </div>
                </div>
                
        </div>
        
  </>
}

export default Dashboard