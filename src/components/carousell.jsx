import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import citation from '/image/citations.png'
import { carousselData } from '../db/db';


export default function Carousell() {

  
  return (
    <div className='my-32 mb-48' data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease">
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
    <div key={index}  role="presentation" className='flex py-10 gap-10 justify-between md:px-5  px-9 xl:px-28 sm:flex-cols flex-row-reverse flex-wrap md:flex-nowrap w-full m-auto rounded-lg bg-slate-100'>
      <div className="text-left w-full md:w-1/2">
      <h1 className='md:text-2xl text-xl font font-semibold uppercase bg mt-5'> 
      {element.name}</h1>
        <p className=' text-lg bg mt-10'> {element.message}</p>

      </div>
      <div className='w-full h-96 md:w-96 md:h-96 '><img src={element.img} alt="client" className=' border-amber-400 border-solid border-8  w-full h-full object-cover hover:-translate-y-2 transition-all ' />
      </div>
    </div>
    )
  }
  </Carousel>


    </div>
  )
}
