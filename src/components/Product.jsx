import React from 'react'
import Boutton from './element/boutton'
import { product } from '../db/db'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Product() {

   


    return (
        <div className='mt-36'>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease" className='flex items-center justify-center flex-col '>
                <p className='c text-center inline p-3 text-white uppercase font-semibold bg-yellow-500 m-auto'>toujours des delicieux BURGERS</p>
                <h1 className='c font text-3xl lg:text-5xl uppercase bg text-center pt-14 pb-8'>choississez et savourez</h1>
                <p className='c text-center text-lg mb-14 bg px-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est maxime facilis rem itaque? Eos facere  quaerat perferendis, <br />esse provident doloremque iusto, ab totam libero aperiam nemo sapiente officia aliquid reiciendis.</p>
            </div>
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
      items: 3,
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
      items: 2,
      partialVisibilityGutter: 30,
     
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  autoPlay
>
    
     {product.map((burger, index) => (
        <div key={index} data-aos="fade-up" className='mx-5  text-center' data-aos-delay="200" data-aos-easing="ease">
            <div className='relative imgProduct'>
                <img src={burger.img} alt="product" className=' mb-4 w-full h-[25rem] object-cover object-center  ' />
                
            </div>
            <span className='text-4xl  font3 font-semibold uppercase bg '>{burger.nom}</span>
            
            <p className='md:mt-3 md:mb-95mt-1 mb-4'>{burger.details}</p>
            {/* <div className='flex items-center gap-10 justify-between '>
                <span className='font-semibold text-lg'>${burger.prices}</span>
                
                <div className='flex items-center gap-2 text-lg'>

                <button className='text-gray-500 text-4xl '>♥ </button>
                <span>{burger.likes}</span>
                </div>
            </div> */}
            <div className='flex items-center w-full gap-3'>
            <Boutton themes={'moyen'} colors={'red'} className={"w-full flex py-4 justify-center gap-5 mt-3"} > 
                    <img src="/svg/ico-bag-clickAndCollect.svg" alt="le sacs d'achat" className=' w-5 ' />
                    <span className='font tracking-wide text-xl'>commander</span>
                </Boutton>
            </div>
        </div>
    ))
  }
  </Carousel>
            
        </div>
    )
}

