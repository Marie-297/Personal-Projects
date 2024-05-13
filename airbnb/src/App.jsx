import React from 'react'
import Navbar from './Components/Navbar'
import Uppersection from './Components/Uppersection'
import Lowersection from './Components/Lowersection'

function App() {
  return (
    <div className='airbnb'>
      <Navbar />
      < Uppersection />
      <div className="flex-cards">
        <Lowersection srcname='./../src/assets/images/image-12.png' rate='5.0' count='6' details='Life lessons with Katie Zaferes' details2='136'/>
        <Lowersection srcname='./../src/assets/images/wedding-photography 1.png' rate='5.0' count='30' details='Learn wedding photography' details2='125'/>
        <Lowersection srcname='./../src/assets/images/mountain-bike 1.png' rate='4.8' count='2' details='Group Mountain Biking' details2='50'/>
      </div>
    </div>
  )
}

export default App
