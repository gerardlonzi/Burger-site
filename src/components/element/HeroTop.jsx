import React from 'react'
import Boutton from './boutton'
import burger_heros from '../../medias/image/burger-hero-top.png'

export default function HeroTop() {

const flex_box = 'flex  items-center'  

  return (
    <div className='px-20 ' >
          
          <div className='flex mt-36  '>
            <div className='w-full'>
                <p className='uppercase font-semibold bg'>c'est le moment de goutter au bon gout de hamberger</p>
                <h1 className='text-9xl font bg shadow mt-9 '>BURGER</h1>
                <p className='text-5xl bg font shadow mb-6'><span className='text-7xl mr-3' >House</span>Click&Collect</p>
                <Boutton themes={'big'} colors={'maron'} >creer un compte</Boutton>
            </div>
            <div classname='relative'>
                <img src={burger_heros} alt="Burger-hero" className='absolute top-2 w-2/4 right-16' />
                <div className='absolute top-2/3 left-2/4 m-auto w-48 h-48 bg-red-700 rounded-full text-white flex justify-center items-center'>
                    <div className=' border-dashed border-2 rounded-full   w-36 h-36 text-center pt-7'>
                        <span className='font-semibold  '>
                            <span className='text-4xl '>5</span>.49 €
                        </span>
                        <span className='uppercase font-semibold block'>seulement</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
