import React from 'react'
import Boutton from './boutton'
import ico_bac from '../../medias/svg/ico-bag-clickAndCollect.svg'
import { useState } from 'react'

export default function Header() {
  const { status, setStatus } = useState(true)

  function handleClick(){
    setStatus(!status)
    console.log(status);
  }

  const flex_box = 'flex  items-center'

  return (
    <div className='px-20 '>
      <div className={`${flex_box} justify-between pb-1`}>
        <p><img src='Logo-burger-house.svg' alt="Logo-burger" className='w-60 hidden md:block' /><img src="picto-burger-house.svg" alt="picto-burger-house" className='w-16 md:hidden' /></p>

        <div className={`${flex_box} gap-x-2 relative`}>
          <div>
            <img src={ico_bac} alt="le sacs d'achat" className='w-5 ' onClick={handleClick}/>
            <div className='bg-white p-3 absolute w-full h-96 z-20 mt-1 rounded-md overflow-auto'
             style={{display:status?'block':'none'}}
            >


            </div>
          </div>
          <p className='font-bold tracking-wider'>Commander votre repas en ligne</p>
        </div>

      </div>
      <div className='flex justify-end gap-x-2 '>
        <Boutton themes={'small'} colors={'yellow'}   >INCRIPTION</Boutton>
        <Boutton themes={'small'} colors={'maron'}>CONNEXION</Boutton>
      </div>
    </div>
  )
}
