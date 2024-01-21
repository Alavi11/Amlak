import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate ,useOutletContext  } from 'react-router-dom';

const EditAndDeleteAdv = () => {

  const [props] = useOutletContext()

  const [code , setCode] = useState(props)
  const navigate = useNavigate();

  const [masahat, setMasahat] = useState(0);
  const [gheimat, setGheimat] = useState("");
  const [otagh, setOtagh] = useState(0);
  const [year, setYear] = useState("");

  const handleDelete = ()=>{
      axios.delete(`http://localhost:3001/api/advertisement/${code}`,{
        headers:{
          "Accept" : "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      })
      .then((res)=>{
        res.data.isDone ? alert(res.data.massage) : alert(res.data.massage)
        navigate('/dashboard')
        window.location.reload()
      }).catch((err)=>{
        console.log(err);
      })
  }

  const handleEdit = () =>{
      const data = {
        masahat,
        gheimat,
        otagh,
        year
      }
      axios.put(`http://localhost:3001/api/advertisement/${code}`,data,{
        headers:{
          "Accept" : "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      })
      .then((res)=>{
        res.data.isDone ? alert(res.data.massage) : alert(res.data.massage)
        navigate('/dashboard')
        window.location.reload()
      }).catch((err)=>{
        console.log(err);
      })
  }

  return <>
        <div className='w-full h-full  max-[1024px]:h-[100px]'>
              <div className='w-full h-[40px] flex justify-around pt-2'>
                <button onClick={()=>{handleDelete()}} className='w-24 h-full bg-rose-600 text-white rounded-lg'>حذف آگهی</button>
                <button  onClick={(e)=>{handleEdit()}} className='w-28 h-full bg-green-600 text-white rounded-lg'>اعمال تغییرات</button>
              </div>
              <div className='w-full h-[750px] max-[1024px]:h-[100px]'>
                  <form className='w-full h-full flex flex-col max-[1024px]:flex-row max-[1024px]:justify-center max-[1024px]:gap-5 items-center pt-7'>
                            <div className='flex flex-col w-1/2  items-end relative max-[1024px]:w-[90px]'>
                            <label htmlFor="masahat" className='text-sm'>مساحت</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="number"
                                id="masahat"
                                value={masahat}
                                onChange={(e) => setMasahat(e.target.value)}
                                
                            />
                            </div>
                            <div className='flex flex-col w-1/2  items-end relative max-[1024px]:w-[90px]'>
                            <label htmlFor="year" className='text-sm'>عمربنا</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="text"
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                
                                list='yearlist'
                            />
                                <datalist id="yearlist">
                                        <option value="کمتر از ۵ سال"/>
                                        <option value="بین ۵ تا ۱۰ سال"/>
                                        <option value="بین ۱۰ تا ۱۵ سال"/>
                                        <option value="بیشتر از ۱۵ سال"/>
                                </datalist>
                            </div>
                            <div className='flex flex-col w-1/2  items-end relative max-[1024px]:w-[90px]'>
                            <label htmlFor="otagh" className='text-sm'>تعداد اتاق</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="number"
                                id="otagh"
                                value={otagh}
                                onChange={(e) => setOtagh(e.target.value)}
                                
                            />
                            </div>
                            <div className='flex flex-col w-1/2  items-end relative max-[1024px]:w-[90px]'>
                            <label htmlFor="gheimat" className='text-sm'>قیمت</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="number"
                                id="gheimat"
                                value={gheimat}
                                onChange={(e) => setGheimat(e.target.value)}
                                
                            />
                            </div>
                  </form>
              </div>
        </div>
  </>
}

export default EditAndDeleteAdv