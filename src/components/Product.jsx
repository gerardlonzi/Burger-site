import React from 'react'
import product1 from '../medias/image/Product-1.jpg'
import product2 from '../medias/image/Product-2.jpg'
import product3 from '../medias/image/Product-3.jpg'
import Boutton from './element/boutton'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all'

export default function Product() {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)
    gsap.fromTo(
        'c',
        {
            opacity:0,
            y:200
        },
        {
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:'c',
                start:'top center',
                end:'bottom center '

            }
        }
        )
    const tab = [

        {
            nom:'lorem ipsuim dalor',
            details : 'burger tres appetissant et delicieux pour \n baisser la temperature',
            img:product1
        },
        {
            nom:'lorem ipsuim dalor',
            details : 'burger tres appetissant et delicieux pour \n baisser la temperature',
            img:product2

        },
        {
            nom:'lorem ipsuim dalor',
            details : 'burger tres appetissant et delicieux pour \n baisser la temperature',
            img:product3

        }


    ]

  return (
    <div className='mt-36'>
        <div className='flex items-center justify-center flex-col '>
            <p className='c text-center inline p-3 text-white uppercase font-semibold bg-yellow-500 m-auto'>toujours des delicieux BURGERS</p>
            <h1 className='c font text-3xl lg:text-5xl uppercase bg text-center pt-14 pb-8'>choississez et savourez</h1>
            <p className='c text-center text-lg bg px-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est maxime facilis rem itaque? Eos facere  quaerat perferendis, <br />esse provident doloremque iusto, ab totam libero aperiam nemo sapiente officia aliquid reiciendis.</p>
        </div>
            <div className='c flex flex-col md:flex-row mt-10 gap-y-10 md:gap-x-1 text-center px-5 md:px-0'>
                {tab.map((burger,index)=>(
                    <div key={index}>
                        <img src={burger.img} alt="product" className='mb-4 '/>
                        <span className='text-2xl font-semibold uppercase bg '>{burger.nom}</span>
                        <p className='md:mt-3 md:mb-9 mt-1 mb-4'>{burger.details}</p>
                        <Boutton themes={'moyen'} colors={'red'} children={'Commander'} />
                    </div>
                ))}
            </div>
    </div>
  )
}

