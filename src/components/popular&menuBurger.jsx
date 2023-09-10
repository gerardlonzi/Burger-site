import React from 'react'
import last1 from '../medias/image/LastProducts-1.jpg'
import last2 from '../medias/image/LastProducts-2.jpg'
import last3 from '../medias/image/LastProducts-3.jpg'


export default function Last() {
    const bloc_image = 'w-full   p-0 bg-yellow-500 relative overflow-hidden rounded-md'
    return (
            <div className=' px-28 grid grid-cols-2 grid-flow-col  gap-x-11 gap-y-9 pt-28 grid-rows-2 w-full height '>
                <div className={`${bloc_image} section_img_text row-span-2`}>
                    <img src={last1} alt="lastProduct-1" className='image w-full h-full object-cover ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='text-xl block'>essayer aujourd'hui</span>
                        <span className='text-3xl '>burger le plus populaire</span>
                    </div>
                </div>
                <div className={`${bloc_image} section_img_text`}>
                    <img src={last2} alt="lastProduct-1" className='image w-full h-full cover object-cover ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='text-xl block'>essayer aujourd'hui</span>
                        <span className='text-3xl '>plus de plaisir <br /> plus de gout</span>
                    </div>
                </div>
                <div className={`${bloc_image} section_img_text`}>
                    <img src={last3} alt="lastProduct-1" className='image w-full h-full object-cover  ' />
                    <div className='absolute top-0 uppercase font-semibold text-white tracking-tight px-6 py-6 font1'>
                        <span className='text-xl block'>essayer aujourd'hui</span>
                        <span className='text-3xl '>frais et pimenter</span>
                    </div>
                </div>
            </div>
    )
}
