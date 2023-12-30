import React from 'react'
import Methos from '../methodpart/Methos'
import MenuSlider from '../menuSlider/MenuSlider'

const Home = () => {
  
  return <>
        <div className='w-full h-[400px] hederbg flex justify-center items-center'>
            <p className='text-3xl max-[1231px]:mb-32'>سامانه هوشمند مسکن</p>
        </div>
        <Methos/>
        <MenuSlider/>
  </>
}

export default Home