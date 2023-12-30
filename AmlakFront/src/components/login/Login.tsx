import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const data = {
          phone,
          password,
        };
        
        await axios.post('http://localhost:3001/api/login',data,{
          headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
          }
        })
        .then((res)=>{
          console.log(res)
          if(res.data.userIsExisted){
            if(res.data.passwordIsOk){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("isLogin",res.data.isLogin)
                alert("با موفقیت وارد شدید")
                navigate('/')
                window.location.reload()
            }
            else{
                alert(res.data.massage)
            }
          }
          else{
            alert("چنین کاربری وجور ندارد")
          }
        }).catch((err)=>{
          console.log(err);
        })
        
      };




  return <>
        <div className='w-full h-[820px] max-[917px]:mt-5 flex items-center justify-center py-5'>
            <form className='w-[73%] max-[535px]:w-full h-full flex flex-col justify-center items-center rounded-xl shadow-2xl' onSubmit={handleSubmit}>
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

                <button className='w-[320px] max-[375px]:w-[270px] h-9 bg-green-600 rounded-md text-white'>ورود</button>
            </form>
        </div>
  </>
}

export default Login