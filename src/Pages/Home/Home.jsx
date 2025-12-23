import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'

export default function Home() {
  return (
    <div className='font-rubik'>
      {/* <Navbar /> */}
      <Banner />
      <Products />
      <About />
      <Offer />
      {/* <Testimonial /> */}
    </div>
  )
}
