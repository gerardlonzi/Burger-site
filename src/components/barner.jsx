import React from 'react'
import ico_bac from '../medias/svg/ico-bag-clickAndCollect.svg'
import Boutton from './element/boutton'
import background_barner from '../medias/image/bg-food.jpg'
import burger_heros from '../medias/image/burger-hero-top.png'


export default function Barner() {

  const flex_box = 'flex  items-center'  

  return (
    <div className='relative pt-10 px-20 pb-48' style={{backgroundImage: `url(${background_barner})`}}>

        <div className={`${flex_box} justify-between pb-1`}>
            <p><img src='Logo-burger-house.svg' alt="Logo-burger" className='w-60 ' /></p>

            <div className={`${flex_box} gap-x-2 `}>
                <img src={ico_bac} alt="le sacs d'achat" className='w-5 '/>
                <p className='font-bold tracking-wider'>Commander votre repas en ligne</p>
            </div>
          
        </div>
        <div className='flex justify-end gap-x-2 '>
                <Boutton themes={'small'} colors={'yellow'}>Commencer</Boutton>
                <Boutton themes={'small'} colors={'maron'}>Commencer</Boutton>
        </div>
        <div className='flex mt-36'>
            <div>
                <p className='uppercase font-semibold text-amber-950 '>c'est le moment de goutter au bon gout de hamberger</p>
                <h1 className='text-8xl font-extrabold text-amber-950 shadow'>BURGER</h1>
                <p className='text-4xl text-amber-950 font-extrabold shadow mb-6'><span className='text-6xl mr-3' >House</span>Click&Collect</p>
                <Boutton themes={'big'} colors={'maron'} >crer un compte</Boutton>
            </div>
            <div>
                <img src={burger_heros} alt="Burger-hero" className='absolute top-2 w-2/4 right-16' />
                <div className='relative top-64 left-40 m-auto px-5 py-5 bg-red-700 rounded-full text-white'>
                    <div className='px-3 py-6 border-dashed border-2 rounded-full text-center'>
                    <span className='font-semibold'>
                        <span className='text-4xl'>5</span>.49
                    </span>
                    <span className='block uppercase font-semibold'>seulement</span>
                    </div>
                    
                </div>
            </div>
        </div>


    </div>
  )
}
