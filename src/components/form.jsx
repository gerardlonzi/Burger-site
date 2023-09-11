import React from 'react'
import Container from './container'
import imgs1 from '../medias/image/Assiette-burger-frites.png'
import imgs2 from '../medias/image/Burger.png'
import imgs3 from '../medias/image/Sauce-pimente.png'

export default function Form() {
    return (
        <div>
            <Container >
                <div className='text-center'>
                    <p className='uppercase mb-4  mt-16 text-3xl font-semibold bg'>reservations</p>
                    <span className='font text-5xl uppercase bg  pt-14 pb-8 '>Reservez votre place</span>
                </div>
                <div className='relative mt-24 flex justify-center '>
                    <img src={imgs2} alt="Burger" className='absolute -top-72 -left-20'/>
                    <img src={imgs3} alt="Sauce-pimente" className='absolute top-0 left-32'/>
                    <img src={imgs1} alt="Assiette-burger-frites" className='absolute top-70 left-3/4 mt-20' />
                    <form action="" method='' className='grid grid-cols-2 gap-7'>
                        <div className=''>
                            <label htmlFor="name" className='form-label ml-2 block text-xl mb-3 font-semibold bg'>Name</label>
                            <input type="text" name='name' id='name' autoComplete='off' placeholder='john Doe' className='placeholder: font-semibold  w-full   border-1 border-solid outline-none pr-32 pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <label htmlFor="email" className='form-label ml-2 block text-xl mb-3 font-semibold bg'>Email</label>
                            <input type="email" name='email' id='email' autoComplete='off' placeholder='johnDoe@gmail.com' className='placeholder: font-semibold  w-full peer focus:outline-none  invalid:border-red-700 border-1 valid:border-green-700  border-solid outline-none pr-32 pt-4 pb-4 rounded-md' />
                            <span className='block mt-2 invisible peer-invalid:visible text-red-700 '>Adresse email invalid</span>
                        </div>
                        <div className=''>
                            <label htmlFor="date" className='form-label ml-2 block text-xl mb-3 font-semibold bg'>Date</label>
                            <input type="date" name='date' id='date' autoComplete='off'  className='placeholder: font-semibold  text-slate-500 w-full form-input  border-1 border-solid outline-none  pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <label htmlFor="heure" className='form-label ml-2 block text-xl mb-3 font-semibold bg'>Heure</label>
                            <input type="time" name='heure' id='heure' autoComplete='off' className='placeholder: font-semibold  w-full form-input  border-1 border-solid outline-none  pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <label htmlFor="number" className='form-label ml-2 block text-xl mb-3 font-semibold bg'>Nombre de personne</label>
                            <input type="number" name='number' id='number' placeholder='123.....' autoComplete='off' className='placeholder: font-semibold   border-1 border-solid outline-none w-full pt-4 pb-4 rounded-md' />
                        </div>
                        <div className=''>
                            <input type="submit" value={'trouver une table'}   className='pointer mt-10 font text-2xl outline-none w-full pt-4 pb-3 rounded-md bg-red-700 text-center text-white  hover:bg-red-600 transition-all   ' />
                        </div>
                    </form>

                </div>
            </Container>
        </div>
    )
}
