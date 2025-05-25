import React from 'react'
import Boutton from './boutton'
import {ShoppingBag,Heart,Menu } from 'lucide-react'
import {Link} from "react-router-dom"
import background_barner from '/image/bg-food.jpg'

export default function Header() {
  return (
  
            
    <div style={{backgroundImage: `url(${background_barner})`}} className='lg:px-20 fixed top-0 py-5 sm:pb-10 sm:pt-12 z-50 md:px-10 gap-5 md:gap-0 flex items-center justify-between  px-5 w-full'>
  {/* <Boutton className={"text-right"} themes={'small'} colors={'yellow'}>Reserver</Boutton> */}
      <div>
        <img src='/svg/Logo-burger-house.svg' alt="Logo-burger" className='w-60 hidden md:block' /><img src="/svg/picto-burger-house.svg" alt="picto-burger-house" className='w-12 md:hidden' />
      </div>

      <div className=' font3 bg text-[26px] hidden lg:block space-x-5'>
        <a href="" className='tracking-widest'>home</a>
        <a href="" className='tracking-widest'>Products</a>
        <a href="" className='tracking-widest'>Reserver</a>
        <a href="" className='tracking-widest'>contact us</a>
      </div>
      <div className="flex gap-10 items-center">
        <div className='gap-5 flex'>
          <div className='relative'>
            <a href=""><ShoppingBag /></a>
            <span className='absolute text-sm w-5 h-5 flex items-center justify-center text-white  -top-[1.02rem]  rounded-full  bg-red-700 left-4'>o</span>
          </div>
          <div className='relative'>
            <a href="" className='text-2xl '><Heart /></a>
            <span className='absolute w-5 h-5 flex items-center justify-center text-white  -top-[0.8rem]  rounded-full  bg-red-700 left-4 text-sm' >o</span>
          </div>
          <Menu className='md:hidden'/>

        </div>
        <div className="space-x-2 hidden sm:block">
        <Boutton themes={'small'} colors={'maron'}>CONNEXION</Boutton>
        </div>
      </div>


    </div>
    
  )
}
