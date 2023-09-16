import React from 'react'
import last1 from '../medias/image/LastProducts-1.jpg'
import last2 from '../medias/image/LastProducts-2.jpg'
import last3 from '../medias/image/LastProducts-3.jpg'


export default function Last() {
    const bloc_image = 'w-full   p-0 bg-yellow-500 relative overflow-hidden rounded-md'
    return (
            <div  className='px-5 gap-9 xl:px-28 md:px-10 flex flex-col h-full  lg:grid lg:grid-cols-2 grid-flow-col md:gap-x-6 md:gap-y-4  lg:gap-x-11 lg:gap-y-9 pt-28 lg:grid-rows-2 w-full lg:h-height '>
                <div data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text row-span-2`}>
                    <img src={last1} alt="lastProduct-1" className='image w-full h-72 md:h-96 lg:h-full object-cover ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='lg:text-xl block text-lg'>essayer aujourd'hui</span>
                        <span className='lg:text-3xl text-2xl'>burger le plus populaire</span>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text`}>
                    <img src={last2} alt="lastProduct-1" className='image w-full h-72 md:h-96 lg:h-full cover object-cover ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='lg:text-xl block text-lg'>essayer aujourd'hui</span>
                        <span className='lg:text-3xl text-2xl'>plus de plaisir <br /> plus de gout</span>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" className={`${bloc_image} section_img_text`}>
                    <img src={last3} alt="lastProduct-1" className='image w-full h-72 md:h-96 object-cover lg:h-full ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='lg:text-xl block text-lg'>essayer aujourd'hui</span>
                        <span className='lg:text-3xl text-2xl'>frais et pimenter</span>
                    </div>
                </div>
            </div>
    )
}
