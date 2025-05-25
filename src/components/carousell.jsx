import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import citation from '/image/citations.png'
import { carousselData } from '../db/db';


export default function Carousell() {

  
  return (
    <div className='my-32 ' data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease">
      <h1 className='font text-3xl lg:text-5xl uppercase bg text-center pt-14 pb-20'>Ce que les clients pensent</h1>
      
      <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={true}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
    {
     carousselData.map((element,index)=>
    <div key={index}  role="presentation" className='text-center flex justify-center items-center pt-20 px-9 md:px-0 flex-col w-full m-auto rounded-lg bg-slate-100'>
      <div>
      <h1 className='md:text-2xl text-xl font-semibold uppercase bg mt-5'> 
      {element.name}</h1>
        <p className='text-center text-lg bg'> {element.message}</p>

      </div>
      <div className='w-36 h-36 md:w-56 md:h-56 '><img src={element.img} alt="client" className=' border-amber-500 border-solid border-4 rounded-full w-full h-full object-cover hover:-translate-y-2 transition-all ' /></div>
    </div>
    )
  }
  </Carousel>


    </div>
  )
}
