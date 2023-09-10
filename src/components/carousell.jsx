import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../medias/image/img1.jpg'
import img2 from '../medias/image/img2.jpg'
import img3 from '../medias/image/img3.jpg'
import img4 from '../medias/image/img4.jfif'
import img5 from '../medias/image/img5.webp'
import citation from '../medias/image/citations.png'
import '../styles/caroussel.css'






export default function Carousell() {

  const handleDragStart = (e) => e.preventDefault();

  let img_person
  let person_name
  let message

  const items = [
    <div onDragStart={handleDragStart} role="presentation" className='shadow-2xl text-center flex justify-center items-center pt-20 flex-col w-2/4 m-auto rounded-lg bg-slate-100'>
      <div className='w-56 h-56 '><img src={img1} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
      <h1 className='text-2xl font-semibold uppercase bg mt-5'> martin louis</h1>
      <div className='flex items-center'>
        <img src={citation} alt="citation" className='w-16 mb-10 ' /><img src={citation} alt="citation" className='w-16 mb-10 ' />
        <p className='text-center text-lg bg'> Vos repas sont toujours delicieux j'aime ♥</p>
      </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='shadow-2xl text-center flex justify-center items-center pt-20 flex-col w-2/4 m-auto rounded-lg bg-slate-100'>
      <div className='w-56 h-56 '><img src={img2} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
      <h1 className='text-2xl font-semibold uppercase bg mt-5'>chloe mira</h1>
      <div className='flex items-center'>
        <img src={citation} alt="citation" className='w-16 mb-10 ' /><img src={citation} alt="citation" className='w-16 mb-10 ' />
        <p className='text-center text-lg bg'> genial j'adore le temps de livraison et la qualiter du burger 🚀🚀</p>
      </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='shadow-2xl text-center flex justify-center items-center pt-20 flex-col w-2/4 m-auto rounded-lg bg-slate-100'>
      <div className='w-56 h-56 '><img src={img3} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
      <h1 className='text-2xl font-semibold uppercase bg mt-5'>Angela anna</h1>
      <div className='flex items-center'>
        <img src={citation} alt="citation" className='w-16 mb-10 ' /><img src={citation} alt="citation" className='w-16 mb-10 ' />
        <p className='text-center text-lg bg'> incroyable et irressistible</p>
      </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='shadow-2xl text-center flex justify-center items-center pt-20 flex-col w-2/4 m-auto rounded-lg bg-slate-100'>
      <div className='w-56 h-56 '><img src={img4} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
      <h1 className='text-2xl font-semibold uppercase bg mt-5'>Jean paul</h1>
      <div className='flex items-center'>
        <img src={citation} alt="citation" className='w-16 mb-10 ' /><img src={citation} alt="citation" className='w-16 mb-10 ' />
        <p className='text-center text-lg bg'> merci pour vos delices 🤗😊😋</p>
      </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='shadow-2xl text-center flex justify-center items-center pt-20 flex-col w-2/4 m-auto rounded-lg bg-slate-100'>
      <div className='w-56 h-56 '><img src={img5} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
      <h1 className='text-2xl font-semibold uppercase bg mt-5'>Miranda bellor</h1>
      <div className='flex items-center'>
        <img src={citation} alt="citation" className='w-16 mb-10 ' /><img src={citation} alt="citation" className='w-16 mb-10 ' />
        <p className='text-center text-lg bg'>congrat for all your works </p>
      </div>
    </div>,

  ];
  return (
    <div className='mt-36 '>
      <h1 className='font text-5xl uppercase bg text-center pt-14 pb-20'>Ce que les clients pensent</h1>
      <AliceCarousel mouseTracking items={items} 
      autoPlay={true}
      animationType='fadeout'
      infinite={true}
      animationDuration={1200}
      autoPlayInterval={800}
      />

    </div>
  )
}
