import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import formatCarrency from '../../util';
import { GrLocation } from 'react-icons/gr';

const Search = () => {

    const [ostan, setOstan] = useState("");
    const [shahr, setShahr] = useState("");
    const [mantaghe, setMantaghe] = useState("");
    const [karbari, setKarbari] = useState("");
    const [melktype, setMelktype] = useState("");
    const [masahat, setMasahat] = useState("");
    const [gheimat, setGheimat] = useState("");
    const [ejare, setEjare] = useState("");
    const [otagh, setOtagh] = useState("");
    const [gharardad, setGharardad] = useState("");
    const [year, setYear] = useState("");
    const [sanad, setSanad] = useState("");
    const [showMenu, setShowMenu] = useState(false);
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



    const handleFilter = async(e:any) =>{
        e.preventDefault();
        const filter = {
            ostan,
            shahr,
            mantaghe,
            karbari,
            melktype,
            masahat,
            gheimat,
            ejare,
            otagh,
            gharardad,
            year,
            sanad
        }
        
        await axios.post("http://localhost:3001/api/advertisement/search",filter,{
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
            }).then((res)=>{
                console.log(res.data)
                setAdv(res.data)
                // window.location.reload()
            }).catch((err)=>{
                console.log(err);
        })
    }
    const navigate = useNavigate();

    const changePage = (id:number) =>{
        navigate(`/advertisement/detail/${id}`)
    }

  return <>
        <div className='w-full h-[817px] max-[917px]:mt-8'>
            <div className='w-full max-[1139px]:h-[160px] h-[90px] bg-[#F7F8F9] rounded-xl max-[614px]:hidden'>
                <form className=' w-full max-[535px]:w-full max-[1139px]:gap-y-[0px] h-full flex flex-wrap gap-[15px] rtl justify-center items-center pt-4' onSubmit={(e)=>{handleFilter(e)}}>
                        <div className='flex flex-col w-[90px] items-start relative'>
                            <label htmlFor="gharardad" className='text-sm'>نوع قرارداد</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="text"
                                id="gharardad"
                                value={gharardad}
                                onChange={(e) => setGharardad(e.target.value)}
                                list="gharardadlist"
                            />
                            <datalist id="gharardadlist">
                                    <option value="فروش"/>
                                    <option value="اجاره"/>
                            </datalist>
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                            <label htmlFor="ostan" className='text-sm'>استان</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="text"
                                id="ostan"
                                value={ostan}
                                onChange={(e) => setOstan(e.target.value)}
                                
                            />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="shahr" className='text-sm'>شهر</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="shahr"
                            value={shahr}
                            onChange={(e) => setShahr(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="mantaghe" className='text-sm'>منطقه</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="mantaghe"
                            value={mantaghe}
                            onChange={(e) => setMantaghe(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="karbari" className='text-sm'>کاربری</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="karbari"
                            value={karbari}
                            onChange={(e) => setKarbari(e.target.value)}
                            
                            list="karbaridata"
                        />
                        <datalist id="karbaridata">
                                    <option value="مسکونی"/>
                                    <option value="تجاری"/>
                                    <option value="اداری"/>
                                    <option value="تجاری-اداری"/>
                                    <option value="صنعتی"/>
                                    <option value="گردشگری"/>
                                    <option value="دامداری"/>
                                    <option value="مزروعی"/>
                        </datalist>
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="melktype" className='text-sm'>نوع ملک</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="melktype"
                            value={melktype}
                            onChange={(e) => setMelktype(e.target.value)}
                            
                            list='melktypedata'
                        />
                        <datalist id="melktypedata">
                                    <option value="ویلایی"/>
                                    <option value="آپارتمان"/>
                                    <option value="زمین"/>
                                    <option value="مغازه"/>
                                    <option value="باغ-ویلا"/>
                                    <option value="انبار-گاراژ"/>
                                    <option value="کارخانه-کارگاه"/>
                        </datalist>
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="masahat" className='text-sm'>مساحت</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="masahat"
                            value={masahat}
                            onChange={(e) => setMasahat(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
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
                        {
                            gharardad == "فروش" ? <div className='flex flex-col w-[90px]  items-start relative'>
                                                        <label htmlFor="sanad" className='text-sm'>نوع سند</label>
                                                        <input
                                                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                            type="text"
                                                            id="sanad"
                                                            value={sanad}
                                                            onChange={(e) => setSanad(e.target.value)}
                                                            
                                                            list='sanadlist'
                                                        />
                                                            <datalist id="sanadlist">
                                                                    <option value="شش دانگ"/>
                                                                    <option value="سه دانگ"/>
                                                                    <option value="قولنامه ای"/>
                                                                    <option value="اوقافی"/>
                                                                    <option value="شورایی"/>
                                                                    <option value="وکالتی"/>
                                                            </datalist>
                                                    </div> : <></>
                        }
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="otagh" className='text-sm'>تعداد اتاق</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="otagh"
                            value={otagh}
                            onChange={(e) => setOtagh(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="gheimat" className='text-sm'>قیمت</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="gheimat"
                            value={gheimat}
                            onChange={(e) => setGheimat(e.target.value)}
                            
                        />
                        </div>
                        {
                            gharardad == "اجاره" ? <div className='flex flex-col w-[90px]  items-start relative'>
                                                    <label htmlFor="ejare">اجاره</label>
                                                    <input
                                                        className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                        type="number"
                                                        id="ejare"
                                                        value={ejare}
                                                        onChange={(e) => setEjare(e.target.value)}
                                                    />
                                                    </div> : <></>
                        }
                        <button className='w-[90px]  h-7 bg-green-600 rounded-md mb-2 text-white'>جستجو</button>
                </form>
            </div>
            <div className={showMenu ? "h-[300px] max-[404px]:h-[360px] max-[614px]:flex flex-col items-center pt-2 hidden w-full bg-[#F7F8F9] rounded-xl overflow-hidden transition-all duration-300" :"h-10 max-[614px]:flex flex-col items-center pt-2 hidden w-full bg-[#F7F8F9] rounded-xl overflow-hidden transition-all duration-300"}>
                        <button className='w-[90px]  h-7 bg-green-600 rounded-md mb-2 text-white' onClick={()=>{setShowMenu(!showMenu)}}>{showMenu ? "بستن" : "فیلترها"}</button>
                        <form className='w-full max-[535px]:w-full max-[1139px]:gap-y-[0px] h-full flex flex-wrap gap-[15px] rtl justify-center items-center pt-4' onSubmit={(e)=>{handleFilter(e)}}>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                            <label htmlFor="gharardad" className='text-sm'>نوع قرارداد</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="text"
                                id="gharardad"
                                value={gharardad}
                                onChange={(e) => setGharardad(e.target.value)}
                                
                                list="gharardadlist"
                            />
                            <datalist id="gharardadlist">
                                    <option value="فروش"/>
                                    <option value="اجاره"/>
                            </datalist>
                        </div>
                        <div className='flex flex-col w-[90px] items-start'>
                            <label htmlFor="ostan" className='text-sm'>استان</label>
                            <input
                                className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                type="text"
                                id="ostan"
                                value={ostan}
                                onChange={(e) => setOstan(e.target.value)}
                                
                            />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="shahr" className='text-sm'>شهر</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="shahr"
                            value={shahr}
                            onChange={(e) => setShahr(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="mantaghe" className='text-sm'>منطقه</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="mantaghe"
                            value={mantaghe}
                            onChange={(e) => setMantaghe(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start'>
                        <label htmlFor="karbari" className='text-sm'>کاربری</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="karbari"
                            value={karbari}
                            onChange={(e) => setKarbari(e.target.value)}
                            
                            list="karbaridata"
                        />
                        <datalist id="karbaridata">
                                    <option value="مسکونی"/>
                                    <option value="تجاری"/>
                                    <option value="اداری"/>
                                    <option value="تجاری-اداری"/>
                                    <option value="صنعتی"/>
                                    <option value="گردشگری"/>
                                    <option value="دامداری"/>
                                    <option value="مزروعی"/>
                        </datalist>
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="melktype" className='text-sm'>نوع ملک</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="text"
                            id="melktype"
                            value={melktype}
                            onChange={(e) => setMelktype(e.target.value)}
                            
                            list='melktypedata'
                        />
                        <datalist id="melktypedata">
                                    <option value="ویلایی"/>
                                    <option value="آپارتمان"/>
                                    <option value="زمین"/>
                                    <option value="مغازه"/>
                                    <option value="باغ-ویلا"/>
                                    <option value="انبار-گاراژ"/>
                                    <option value="کارخانه-کارگاه"/>
                        </datalist>
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="masahat" className='text-sm'>مساحت</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="masahat"
                            value={masahat}
                            onChange={(e) => setMasahat(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
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
                        {
                            gharardad == "فروش" ? <div className='flex flex-col w-[90px]  items-start relative'>
                                                        <label htmlFor="sanad" className='text-sm'>نوع سند</label>
                                                        <input
                                                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                            type="text"
                                                            id="sanad"
                                                            value={sanad}
                                                            onChange={(e) => setSanad(e.target.value)}
                                                            
                                                            list='sanadlist'
                                                        />
                                                            <datalist id="sanadlist">
                                                                    <option value="شش دانگ"/>
                                                                    <option value="سه دانگ"/>
                                                                    <option value="قولنامه ای"/>
                                                                    <option value="اوقافی"/>
                                                                    <option value="شورایی"/>
                                                                    <option value="وکالتی"/>
                                                            </datalist>
                                                    </div> : <></>
                        }
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="otagh" className='text-sm'>تعداد اتاق</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="otagh"
                            value={otagh}
                            onChange={(e) => setOtagh(e.target.value)}
                            
                        />
                        </div>
                        <div className='flex flex-col w-[90px]  items-start relative'>
                        <label htmlFor="gheimat" className='text-sm'>قیمت</label>
                        <input
                            className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                            type="number"
                            id="gheimat"
                            value={gheimat}
                            onChange={(e) => setGheimat(e.target.value)}
                            
                        />
                        </div>
                        {
                            gharardad == "اجاره" ? <div className='flex flex-col w-[90px]  items-start relative'>
                                                    <label htmlFor="ejare">اجاره</label>
                                                    <input
                                                        className='mb-8 w-full h-7 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                        type="number"
                                                        id="ejare"
                                                        value={ejare}
                                                        onChange={(e) => setEjare(e.target.value)}
                                                    />
                                                    </div> : <></>
                        }
                            <button className='w-[90px]  h-7 bg-green-600 rounded-md mb-2 text-white'>جستجو</button>
                        </form>
                    </div>


            <div className={`flex w-full h-[727px] max-[1139px]:h-[650px] ${showMenu ? "max-[614px]:h-[450px]" : "max-[614px]:h-[727px]"} p-8 overflow-y-scroll flex-wrap gap-8 justify-center`}>
                    {
                    adv.map((item:any, index) => (
                        <div onClick={()=>{changePage(item.postcode)}} className='w-[320px] max-[375px]:[w-300px] mx-16 h-[280px] shadow-xl rounded-[10px] relative cursor-pointer'>
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
                        </div>
                    ))
                    }
            </div>
        </div>
  </>
}

export default Search