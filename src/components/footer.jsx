import React from 'react'
import {MapPin,Mail} from "lucide-react"
import Tooltip from './element/animate-Element'

export default function Footer() {
    let date =new Date()
    let year = date.getFullYear()
  return (
    <div className=' mt-44   w-full ' data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease">
        <div className='bg-yellow-600 lg:h-footer h-res relative '>
            <img src="/image/bg-footer.jpg" alt="bg-footer" className='w-full h-full object-cover'/>
            <div className='absolute top-0 w-full px-5 sm:px-14 pt-28 flex flex-col gap-16  text-white'>
                <div>
                    <img src="/svg/Logo-burger-house-white.svg" alt="logo house burger"className='w-3/4 lg:w-1/3' />
                </div>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:justify-between' >
                    <div className='text-lg font-normal'>
                        Lorem, 
                        Laudantium perspiciatis molestias ea voluptatum aut<br className='md:hidden lg:block' /> voluptatum aut quia accusamus laboriosam voluptatum aut<br className='md:hidden lg:block'/>architecto commodi nostrum. Inventore voluptatum aut<br className='md:hidden lg:block'/> voluptatum non, amet 
                    </div>
                    <div className='  font-semibold'>
                        <div className='flex gap-3'>
                        <MapPin className='text-4xl w-10 text-white rounded-lg'/>
                            
                            <p className='uppercase text-base lg:text-lg'>15 olace bellcoeur 6500 paris</p>
                        </div>
                        <div className='flex gap-3 mt-3'>
                        <Mail className="text-4xl w-10 text-white rounded-lg" />
                            
                            <p>infos@burger-house.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse gap-y-10 lg:flex-row lg:justify-between '>
                    <p className='uppercase font-semibold '>③ burger house {year} .all rights reserved</p>
                    <div className='relative'>
                    <Tooltip/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
