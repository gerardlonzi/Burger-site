import React from 'react'
import Boutton from './boutton'
import burger_heros from '../../medias/image/burger-hero-top.png'

export default function HeroTop() {

    const flex_box = 'flex  items-center'

    return (
        <div className='lg:px-20  flex justify-center items-center md:block' >

            <div className='flex mt-36 flex-col '>
                <div className='w-full text-center lg:text-left '>
                    <p className='uppercase font-semibold bg text-sm md:text-base'>c'est le moment de goutter au bon gout <br className='xl:hidden block' /> de hamberger</p>
                    <h1 className='xl:text-9xl text-6xl md:text-8xl font bg shadow mt-9 '>BURGER</h1>
                    <p className='xl:text-5xl text-2xl bg font shadow mb-6'><span className='xl:text-7xl md:text-6xl text-4xl mr-3' >House</span>Click&Collect</p>
                    <Boutton themes={'big'} colors={'maron'} >creer un compte</Boutton>
                </div>
                <div classname='relative '>
                    <img src={burger_heros} alt="Burger-hero" className='lg:absolute top-14 xl:top-2  lg:w-2/4 w-full md:w-3/4 right-8 2xl:right-16' />
                    <div className='lg:absolute relative -top-48 left-20 lg:top-2/3 lg:left-2/4  xl:top-2/3 xl:left-2/4 m-auto w-32 h-32 sm:w-48 sm:h-48 bg-red-700 rounded-full text-white flex justify-center items-center'>
                        <div className=' border-dashed border-2 rounded-full w-28 h-28  sm:w-36 sm:h-36 text-center pt-7'>
                            <span className='font-semibold  '>
                                <span className='sm:text-4xl text-2xl'>5</span>.49 €
                            </span>
                            <span className='uppercase font-semibold block text-sm sm:text-xl'>seulement</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
