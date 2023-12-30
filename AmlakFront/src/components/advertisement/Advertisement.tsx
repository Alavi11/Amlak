import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Advertisement = () => {

  const [ostan, setOstan] = useState("");
  const [shahr, setShahr] = useState("");
  const [mantaghe, setMantaghe] = useState("");
  const [karbari, setKarbari] = useState("");
  const [melktype, setMelktype] = useState("");
  const [address, setAddress] = useState("");
  const [zirbana, setZirbana] = useState("");
  const [masahat, setMasahat] = useState("");
  const [barmelk, setBarmelk] = useState("");
  const [gheimat, setGheimat] = useState("");
  const [ejare, setEjare] = useState("");

  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    const data = {
      ostan,
      shahr,
      mantaghe,
      karbari,
      melktype,
      address,
      zirbana,
      masahat,
      barmelk,
      gheimat,
      ejare
    }

    await axios.post("http://localhost:3001/api/advertisement",data,{
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return <>
        <div className='w-full h-[820px] max-[890px]:h-[1300px] max-[917px]:mt-5 flex items-center justify-center py-5'>
            <form className='w-[73%] max-[535px]:w-full h-full flex flex-wrap gap-[10px] rtl justify-center items-center rounded-xl shadow-2xl' onSubmit={handleSubmit}>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start'>
                    <label htmlFor="ostan">استان</label>
                    <input
                        className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                        type="text"
                        id="ostan"
                        value={ostan}
                        onChange={(e) => setOstan(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start'>
                <label htmlFor="shahr">شهر</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="shahr"
                    value={shahr}
                    onChange={(e) => setShahr(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start'>
                <label htmlFor="mantaghe">منطقه</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="mantaghe"
                    value={mantaghe}
                    onChange={(e) => setMantaghe(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start'>
                <label htmlFor="karbari">کاربری</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="karbari"
                    value={karbari}
                    onChange={(e) => setKarbari(e.target.value)}
                    required
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
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="melktype">نوع ملک</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="melktype"
                    value={melktype}
                    onChange={(e) => setMelktype(e.target.value)}
                    required
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
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="address">آدرس</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="zirbana">زیربنا</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="zirbana"
                    value={zirbana}
                    onChange={(e) => setZirbana(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="masahat">مساحت</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="masahat"
                    value={masahat}
                    onChange={(e) => setMasahat(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="barmelk">بر ملک</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="barmelk"
                    value={barmelk}
                    onChange={(e) => setBarmelk(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="gheimat">قیمت</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="gheimat"
                    value={gheimat}
                    onChange={(e) => setGheimat(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="ejare">اجاره</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="ejare"
                    value={ejare}
                    onChange={(e) => setEjare(e.target.value)}
                />
                </div>
                <button className='w-[320px] max-[375px]:w-[270px] h-9 bg-green-600 rounded-md mb-2 text-white'>ثبت</button>
            </form>
        </div>  
  </>
}

export default Advertisement;