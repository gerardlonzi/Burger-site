import React from 'react'
import Boutton from './boutton'

export default function HeroTop() {

    const flex_box = 'flex  items-center'

    return (
        <div className=' mt-32 sm:mt-40 justify-center items-center md:block' >

            <div className='flex mt-20 flex-col '>
                <div data-aos="zoom-in" className='w-full text-center lg:text-left '>
                    <p className='uppercase inline-block p-2 font3 border-2 border-[#342121] border-dashed  bg text-lg md:text-2xl tracking-wide'>c'est le moment de goutter au bon gout <br className='xl:hidden block' /> de hamberger</p>
                    <h1 className='xl:text-9xl text-6xl md:text-8xl font bg mt-9 '>BURGER</h1>
                    <p className='xl:text-5xl text-2xl bg font shadows mb-6'><span className='xl:text-7xl md:text-6xl text-4xl mr-3' >House</span>Click&Collect</p>
                    <Boutton themes={'big'} colors={'maron'} >commander </Boutton>
                </div>
                <div classname='relative'>
                    <img data-aos="flip-right" data-aos-delay="500"  data-aos-easing="ease-in-out" src="/image/burger-hero-top.png" alt="Burger-hero" className='lg:absolute top-14 xl:top-2  lg:w-2/4 w-full md:w-3/4 right-8 2xl:right-16' />
                    <div data-aos="flip-right" data-aos-delay="500"  data-aos-easing="ease-in-out" className='lg:absolute relative -top-48 left-20 lg:top-2/3 lg:left-2/4  xl:top-2/3 xl:left-2/4 m-auto w-32 h-32 sm:w-48 sm:h-48 bg-red-700 rounded-full text-white flex justify-center items-center'>
                        <div className=' rotate-[0.5rad] font3 flex flex-col justify-center border-dashed border-2 rounded-full w-28 h-28  sm:w-44 sm:h-44 text-center '>
                            <span className='font-semibold text-5xl sm:text-7xl '>
                                20%
                            </span>
                            <span className='uppercase  block text-3xl sm:text-4xl '>OFF</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
