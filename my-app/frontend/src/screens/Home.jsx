import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousul from '../components/Carousul'
export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div>
        <Carousul />
      </div>
      <div className='m-4'>
        <Card />
        <Card />
        <Card />
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
