import React from 'react'
import Navbar from './Components/Navbar'
import Uppersection from './Components/Uppersection'
import Lowersection from './Components/Lowersection'
import img12 from './assets/images/image-12.png'
import imgWedding from './assets/images/wedding-photography 1.png'
import imgMountain from './assets/images/mountain-bike 1.png'

function App() {
  return (
    <div className='airbnb'>
      <Navbar />
      < Uppersection />
      <div className="flex-cards">
        <Lowersection srcname={img12} count='6' details='Life lessons with Katie Zaferes' details2='136'/>
        <Lowersection srcname={imgWedding} rate='5.0' count='30' details='Learn wedding photography' details2='125'/>
        <Lowersection srcname={imgMountain} rate='4.8' count='2' details='Group Mountain Biking' details2='50'/>
      </div>
    </div>
  )
}

export default App
