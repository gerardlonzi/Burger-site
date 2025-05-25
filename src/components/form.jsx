import React from 'react'
import Container from './container'
import imgs1 from '/image/Assiette-burger-frites.png'
import imgs2 from '/image/Burger.png'
import imgs3 from '/image/Sauce-pimente.png'

export default function Form() {
    return (
        <div>
            <Container >
                <div data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" className='text-center'>
                    <p className='uppercase mb-4  mt-16 text-xl lg:text-3xl font-semibold bg'>reservations</p>
                    <span className='font  uppercase bg  pt-14 pb-8 text-3xl lg:text-5xl px-5 lg:px-0'>Reservez votre place</span>
                </div>
                <div className='relative mt-24 flex justify-center '>
                    <img data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" src={imgs2} alt="Burger" className='hidden lg:block md:-left-28 absolute w-[18rem] -top-72 -left-20'/>
                    <img data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" src={imgs3} alt="Sauce-pimente" className='hidden lg:block md:-left-24  absolute top-0 left-32'/>
                    <img data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" src={imgs1} alt="Assiette-burger-frites" className='hidden lg:block w-[30rem] md:pl-16 absolute top-[120px] left-[67rem] mt-20' />
                    <form data-aos="fade-up" data-aos-delay="200"  data-aos-easing="ease" action="" method='' className='flex flex-col gap-5 w-full sm:grid sm:grid-cols-2 sm:gap-3 md:gap-7 xl:px-36' onSubmit={(e)=>e.preventDefault()}>
                        <div className=''>
                            <label htmlFor="name" className=' ml-2 block text-xl mb-3 font-semibold bg'>Name</label>
                            <input type="text" name='name' id='name' autoComplete='off' placeholder='john Doe' className='placeholder:font-semibold focus:border-yellow-600 focus:ring-amber-600 w-full  border-1 border-solid outline-none pr-32 pt-4 pb-4 rounded-md'  />
                        </div>
                        <div className=''>
                            <label htmlFor="email" className=' ml-2 block text-xl mb-3 font-semibold bg'>Email</label>
                            <input type="email" name='email' id='email' autoComplete='off' placeholder='johnDoe@gmail.com' className='focus:border-yellow-600 focus:ring-amber-600 placeholder: font-semibold  w-full peer focus:outline-none  invalid:border-red-700 border-1 valid:border-green-700  border-solid outline-none pr-32 pt-4 pb-4 rounded-md' />
                            <span className='block mt-2 invisible peer-invalid:visible text-red-700 '>Adresse email invalid</span>
                        </div>
                        <div className=''>
                            <label htmlFor="date" className=' ml-2 block text-xl mb-3 font-semibold bg'>Date</label>
                            <input type="date" name='date' id='date' autoComplete='off'  className='placeholder: font-semibold focus:border-yellow-600 focus:ring-amber-600  text-slate-500 w-full form-input  border-1 border-solid outline-none  pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <label htmlFor="heure" className=' ml-2 block text-xl mb-3 font-semibold bg'>Heure</label>
                            <input type="time" name='heure' id='heure' autoComplete='off' className='placeholder: font-semibold focus:border-yellow-600 focus:ring-amber-600 w-full form-input  border-1 border-solid outline-none  pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <label htmlFor="number" className=' ml-2 block text-xl mb-3 font-semibold bg'>Nombre de personne</label>
                            <input type="number" name='number' id='number' placeholder='123.....' autoComplete='off' className='placeholder: font-semibold  focus:border-yellow-600 focus:ring-amber-600 border-1 border-solid outline-none w-full pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <input type="submit" value={'trouver une table'}   className='pointer mt-10 font md:text-2xl text-xl outline-none w-full pt-4 focus:border-yellow-600 focus:ring-amber-600 pb-3 rounded-md bg-red-700 text-center text-white  hover:bg-red-600 transition-all   ' />
                        </div>
                    </form>
                    
                </div>
            </Container>
        </div>
    )
}
