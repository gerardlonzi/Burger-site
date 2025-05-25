import React from 'react'
import last1 from '/image/s3.png'
import last2 from '/image/s1.png'
import last3 from '/image/s2.png'


export default function Last() {
    const bloc_image = 'w-full   p-0 bg-yellow-500 relative overflow-hidden rounded-md'
    return (
            <div  className=' gap-9  flex flex-col h-full  lg:grid lg:grid-cols-2 grid-flow-col md:gap-x-6 md:gap-y-4  lg:gap-x-11 lg:gap-y-9 pt-28 lg:grid-rows-2 w-full lg:h-height '>
                <div data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text row-span-2`} >
                    <img src={last1} alt="lastProduct-1" className='image w-full h-72 md:h-96 lg:h-full object-cover ' />
                    <div className='absolute top-0 uppercase font3  text-white tracking-tight px-6 py-6 '>
                        <span className='sm:text-4xl block mb-5 tracking-wide text-2xl'>essayer aujourd'hui</span>
                        <span className='sm:text-5xl text-4xl  font-semibold tracking-wide'>burger le plus populaire</span>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text`}>
                    <img src={last2} alt="lastProduct-1" className='image w-full h-48 sm:h-72  lg:h-full cover object-cover ' />
                    <div className='absolute font3 top-0 uppercase  text-white tracking-tight px-6 py-6 '>
                        <span className='sm:text-3xl mb-5 block tracking-wide text-xl'>essayer aujourd'hui</span>
                        <span className='sm:text-4xl text-3xl font-semibold tracking-wide'>plus de plaisir  plus de gout</span>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text`}>
                    <img src={last3} alt="lastProduct-1" className='image w-full h-48 sm:h-72  object-cover lg:h-full ' />
                    <div className='absolute top-0 uppercase  text-white tracking-tight px-6 py-6 font3'>
                        <span className='sm:text-3xl mb-4 block tracking-wide text-xl'>essayer aujourd'hui</span>
                        <span className='sm:text-4xl font-semibold  text-3xl tracking-wide'>frais et pimenter</span>
                    </div>
                </div>
            </div>
    )
}
