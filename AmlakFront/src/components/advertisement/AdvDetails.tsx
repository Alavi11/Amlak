import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { advDetails } from '../../models/test'
import { GrLocation } from 'react-icons/gr'
import formatCarrency from '../../util'
import { FaFileContract } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";


const AdvDetails = () => {

    const [rate , setRate] = useState(5)

    let { advPostcode } = useParams()
    const [adv , setAdv] = useState<advDetails>({_id:"",
        postcode:0,
        otagh:0,
        ostan:"",
        shahr:"",
        mantaghe:"",
        karbari:"",
        melktype:"",
        address:"",
        zirbana:0,
        masahat:0,
        gheimat:0,
        ejare:0,
        photo:"",
        rate:0,
        gharardad:"",
        phone:"",
        year:"",
        sanad:"",
        __v:0,})

    const url = "http://localhost:3001"

    const sendRate = async() =>{
        axios.post(`http://localhost:3001/api/advertisement/detail/${advPostcode}`,{rate:rate})
        .then((res)=>{
            if(res.status == 200){
                alert("امتیاز شما با موفقیت ثبت شد")
                window.location.reload()
            }
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/advertisement/detail/${advPostcode}`)
        .then((res)=>{
            console.log(res);
            setAdv(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return <>
        <div className='w-full h-[820px] max-[600px]:h-[900px] max-[917px]:mt-8 flex justify-center items-center'>
            <div className='w-[900px] max-[917px]:w-full max-[917px]:flex-col max-[917px]:items-center h-full shadow-2xl rounded-xl flex'>
                <div className='w-1/2 max-[600px]:h-1/2 max-[917px]:w-full h-full flex flex-col items-center pt-10 relative'>
                        <img className='w-[400px] max-[375px]:w-[350px] max-[350px]:w-[320px] max-[320px]:w-[300px] h-[250px] rounded-md' src={`${url}/${adv.photo}`}/>
                        <small className='max-[917px]:left-[30%] absolute text-lg left-8'>امتیاز : {adv.rate}</small>
                        <div className='w-[90%] max-[917px]:w-[400px] max-[410px]:w-[320px] h-10 bg-green-500 flex justify-around items-center mt-5 rounded-lg text-white '>
                            <label className='text-lg' htmlFor='rate'>{rate}</label>
                            <input id='rate' onChange={(e)=>{setRate(Number(e.target.value))}} type='range' max={5} min={1}></input>
                            <button className='w-32 h-8 bg-green-700 rounded-sm shadow-2xl' onClick={sendRate}>ثبت</button>
                        </div>
                </div>
                <div className='w-1/2 h-full rtl  max-[600px]:w-full '>
                    <div className='w-full h-1/2 rtl flex justify-center max-[600px]:gap-y-5 max-[600px]:h-2/5 max-[600px]:items-center gap-7 pr-5 max-[917px]:p-0 flex-col flex-wrap max-[917px]:gap-14 max-[917px]:justify-start max-[917px]:h-1/4 max-[917px]:mt-5'>
                        <p className='flex text-lg max-[917px]:text-sm'><GrLocation size={"20px"} />{adv.address}</p>
                        <p className='text-lg max-[917px]:text-sm'>قیمت: {formatCarrency(adv.gheimat)} تومان</p>
                        <p className='text-lg max-[917px]:text-sm max-[600px]:w-'>مساحت: {adv.masahat} متر</p>
                        <p className='text-lg max-[917px]:text-sm '>زیربنا: {adv.zirbana} متر</p>
                    </div>
                    <div className='w-full h-[40%] max-[917px]:h-[30%] max-[600px]:h-[40%] max-[600px]:gap-y-5 max-[600px]:items-center pr-5 flex flex-col gap-10 flex-wrap rtl max-[917px]:p-0'>
                            <p className='flex rtl text-sm'><FaFileContract size={"25px"} color='green'  className='ml-2'/>{adv.gharardad}</p>
                            <p className='flex rtl text-sm items-center'><FaHome size={"24px"} color='green' className='ml-2'/>{adv.melktype} {adv.karbari}</p>
                            <p className='flex rtl text-sm'><IoIosBed size={"25px"} color='green' className='ml-2'/>{adv.otagh} اتاق</p>
                            <p className='flex rtl text-sm'><SlCalender size={"25px"} color='green' className='ml-2'/>{adv.year} ساخت</p>
                            {
                                adv.gharardad == "فروش" ? <p className='flex rtl text-sm'><IoDocumentTextSharp size={"25px"} color='green' className='ml-2'/>سند {adv.sanad}</p> : <p className='flex rtl text-sm'><BsCashStack size={"25px"} color='green' className='ml-2'/>مبلغ اجاره: {adv.ejare}</p>
                            }
                            
                    </div>
                    <div className='w-full h-[10%]  max-[600px]:mt-5 pr-5 rtl flex items-center justify-between max-[917px]:p-0 max-[610px]:flex-col' >
                        <p> شماره تلفن همراه مالک</p>
                        <p className='max-[768px]:w-[140px] p-2 max-[768px]:h-[30px] w-[150px] h-[50px] bg-green-500 text-white flex items-center justify-center rounded-[50px]'>
                        {adv.phone}<FaPhone size={"25px"} className='mr-2'/></p>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default AdvDetails