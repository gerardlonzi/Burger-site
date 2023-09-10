import React from 'react'
import Boutton from './boutton'
import ico_bac from '../../medias/svg/ico-bag-clickAndCollect.svg'

export default function Header() {

    const flex_box = 'flex  items-center'  

  return (
    <div className='px-20'>
         <div className={`${flex_box} justify-between pb-1`}>
            <p><img src='Logo-burger-house.svg' alt="Logo-burger" className='w-60 ' /></p>

            <div className={`${flex_box} gap-x-2 `}>
                <img src={ico_bac} alt="le sacs d'achat" className='w-5 '/>
                <p className='font-bold tracking-wider'>Commander votre repas en ligne</p>
            </div>
          
        </div>
        <div className='flex justify-end gap-x-2 '>
                <Boutton themes={'small'} colors={'yellow'}>INCRIPTION</Boutton>
                <Boutton themes={'small'} colors={'maron'}>CONNEXION</Boutton>
        </div>
    </div>
  )
}
