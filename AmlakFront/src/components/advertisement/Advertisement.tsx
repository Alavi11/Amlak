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
  const [postcode, setPostcode] = useState("");
  const [gheimat, setGheimat] = useState("");
  const [ejare, setEjare] = useState("");
  const [otagh, setOtagh] = useState("");
  const [gharardad, setGharardad] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const [year, setYear] = useState("");
  const [sanad, setSanad] = useState("");



    useEffect(()=>{
        if(phone.length !== 11){
            setErr("شماره موبایل باید ۱۱ رقمی باشد")
        }
        else{
            setErr("")
        }
    },[phone])


  const handleSubmit = async(e:any , err:any) =>{
    e.preventDefault();
    const formData = new FormData()
    const photo = document.querySelector<any>("#photo").files[0];
    formData.append("picture",photo);
    formData.append("ostan",ostan);
    formData.append("shahr",shahr);
    formData.append("mantaghe",mantaghe);
    formData.append("karbari",karbari);
    formData.append("melktype",melktype);
    formData.append("address",address);
    formData.append("zirbana",zirbana);
    formData.append("masahat",masahat);
    formData.append("postcode",postcode);
    formData.append("gheimat",gheimat);
    formData.append("ejare",ejare);
    formData.append("otagh",otagh);
    formData.append("gharardad",gharardad);
    formData.append("phone",phone);
    formData.append("year",year);
    formData.append("sanad",sanad);

    if(err === ""){
        await axios.post("http://localhost:3001/api/advertisement",formData,{
        headers:{
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        }).then((res)=>{
        alert(res.data.massage)
        window.location.reload()
        }).catch((err)=>{
        console.log(err);
        })
    }
    else{
        alert(err)
    }
  }

  return <>
        <div className='w-full h-[820px] max-[890px]:h-[1850px] max-[1342px]:h-[1000px] max-[917px]:mt-5 flex items-center justify-center py-5'>
            <form className='w-[73%] max-[535px]:w-full h-full flex flex-wrap gap-[10px] rtl justify-center items-center rounded-xl shadow-2xl' onSubmit={(e)=>{handleSubmit(e,err)}}>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                    <label htmlFor="gharardad">نوع قرارداد</label>
                    <input
                        className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                        type="text"
                        id="gharardad"
                        value={gharardad}
                        onChange={(e) => setGharardad(e.target.value)}
                        required
                        list="gharardadlist"
                    />
                    <datalist id="gharardadlist">
                            <option value="فروش"/>
                            <option value="اجاره"/>
                    </datalist>
                </div>
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
                <label htmlFor="year">عمربنا</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
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
                    gharardad == "فروش" ? <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                                                <label htmlFor="sanad">نوع سند</label>
                                                <input
                                                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                    type="text"
                                                    id="sanad"
                                                    value={sanad}
                                                    onChange={(e) => setSanad(e.target.value)}
                                                    required
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
                
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="postcode">کدپستی</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="otagh">تعداد اتاق</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="number"
                    id="otagh"
                    value={otagh}
                    onChange={(e) => setOtagh(e.target.value)}
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
                <label htmlFor="phone">تلفن همراه مالک</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <small className='absolute text-rose-700 bottom-1'>{err}</small>
                </div>
                {
                    gharardad == "اجاره" ? <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                                            <label htmlFor="ejare">اجاره</label>
                                            <input
                                                className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                                                type="number"
                                                id="ejare"
                                                value={ejare}
                                                onChange={(e) => setEjare(e.target.value)}
                                            />
                                            </div> : <></>
                }
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-start relative'>
                <label htmlFor="photo">افزودن عکس</label>
                <input
                    className='mb-8 h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="file"
                    id="photo"
                    name='picture'
                />
                </div>
                <button className='w-[320px] max-[375px]:w-[270px] h-9 bg-green-600 rounded-md mb-2 text-white'>ثبت</button>
            </form>
        </div>  
  </>
}

export default Advertisement;