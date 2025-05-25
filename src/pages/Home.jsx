import React from 'react'
import Last from '../components/popular&menuBurger'
import background_barner from '/image/bg-food.jpg'
import Container from '../components/container'
import Header from '../components/element/header'
import HeroTop from '../components/element/HeroTop'
import Product from '../components/Product'
import Carousell from '../components/carousell'
import Form from '../components/form'
import Footer from '../components/footer'

export default function HomePages() {
  return (
   <div>

  
     <div className=' pt-10  pb-0 lg:pb-48 font1 text-lg' style={{backgroundImage: `url(${background_barner})`}}>

          <Header />
       <Container>
          <HeroTop /> 
           
       </Container>
      </div>
      <Container>
        <Last />
      </Container>
        <Product />
        <Container>
        <Carousell/>
       </Container>
      <Form />
      <Footer />

     
    


   </div>

    
  )
}
