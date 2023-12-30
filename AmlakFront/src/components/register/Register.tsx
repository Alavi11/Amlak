import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  let navigate = useNavigate()

  useEffect(() => {
    if (password !== confirmPassword) {
      setErrors(["Passwords don't match"]);
    } else {
      setErrors([]);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      password,
    };
    await axios.post('http://localhost:3001/api/register',data,{
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then((res)=>{
      console.log(res)
      if(res.data.exist){
        alert("چنین کاربری قبلا ثبت نام کرده است")
      }
      else{
        alert("با موفقیت ثبت نام شدید")
        navigate("/")
        window.location.reload()
      }
    }).catch((err)=>{
      console.log(err);
    })
    
  };



  return <>
        <div className='w-full h-[820px] max-[917px]:mt-5 flex items-center justify-center py-5'>
            <form className='w-[73%] max-[535px]:w-full h-full flex flex-col justify-center items-center rounded-xl shadow-2xl' onSubmit={handleSubmit}>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-end'>
                    <label htmlFor="name">نام و نام خانوادگی</label>
                    <input
                        className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-end'>
                <label htmlFor="phone">شماره موبایل</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-end'>
                <label htmlFor="email">پست الکترونیکی</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-end'>
                <label htmlFor="password">رمز عبور</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col w-[320px] max-[375px]:w-[270px] items-end relative'>
                <label htmlFor="confirmPassword">تکرار رمز عبور</label>
                <input
                    className='mb-8 w-full h-9 border-[0.5px] border-gray-400 rounded-md outline-none rtl p-2'
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {errors[0] && <small className='text-red-700 absolute bottom-[10px]'>رمزعبور یکسان نیست</small>}
                </div>


                <button className='w-[320px] max-[375px]:w-[270px] h-9 bg-green-600 rounded-md text-white'>ثبت نام</button>
            </form>
        </div>
  
  </>
}

export default Register