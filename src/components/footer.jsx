import React from 'react'
import bgfooter from '../medias/image/bg-footer.jpg'
import logo from '../medias/svg/Logo-burger-house-white.svg'
import facebook from '../medias/image/facebook.png'
import instagram from '../medias/image/instagram.png'
import twitter from '../medias/image/twitter.png'
import watsapp from '../medias/image/whatsapp.png'
import location from '../medias/image/location.png'
import enveloppe from '../medias/image/envelope.png'



export default function Footer() {
    let date =new Date()
    let year = date.getFullYear()
  return (
    <div className=' mt-44 mb-10  md:px-8  px-0 w-full ' data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease">
        <div className='bg-yellow-600 lg:h-footer h-res relative '>
            <img src={bgfooter} alt="bg-footer" className='w-full h-full object-cover'/>
            <div className='absolute top-0 w-full px-14 pt-28 flex flex-col gap-16  text-white'>
                <div>
                    <img src={logo} alt="logo house burger"className='w-3/4 lg:w-1/3' />
                </div>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:justify-between' >
                    <div className='text-lg font-normal'>
                        Lorem, 
                        Laudantium perspiciatis molestias ea voluptatum aut<br className='md:hidden lg:block' /> voluptatum aut quia accusamus laboriosam voluptatum aut<br className='md:hidden lg:block'/>architecto commodi nostrum. Inventore voluptatum aut<br className='md:hidden lg:block'/> voluptatum non, amet 
                    </div>
                    <div className=' text-base lg:text-lg font-semibold'>
                        <div className='flex gap-3'>
                            <img src={location} alt="location" className=' w-10 bg-white rounded-lg' />
                            <p className='uppercase'>15 olace bellcoeur 6500 paris</p>
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <img src={enveloppe} alt="envelope" className='w-10 rounded-lg  bg-white'/>
                            <p>infos@burger-house.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:justify-between '>
                    <p className='uppercase font-semibold '>③ burger house {year} .all rights reserved</p>
                    <div className='flex text-white  gap-3 '>
                        <a href="" className='p-1 bg-white rounded-full hover:bg-yellow-500 transition-all'><img src={instagram} alt="logo_instagram" className= 'w-5 text-white'/></a>
                        <a href=""  className='p-1 bg-white rounded-full hover:bg-yellow-500 transition-all'><img src={twitter} alt="logo_twitter"className='w-5' /></a>
                        <a href=""  className='p-1 bg-white rounded-full hover:bg-yellow-500 transition-all'><img src={facebook} alt="logo_facebook" className= 'w-5'/></a>
                        <a href=""  className='p-1 bg-white rounded-full hover:bg-yellow-500 transition-all'><img src={watsapp} alt="logo_watsapp" className='w-5'/></a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
