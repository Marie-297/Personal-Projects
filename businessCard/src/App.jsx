import React, { useState } from 'react'
import Info from './Components/Info'
import About from './Components/About'
import Interest from './Components/Interest'
import Footer from './Components/Footer'
import Switchbutton from './Components/Switchbutton'
// import './App.css'; // Import your CSS file

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Switchbutton toggleDarkMode={toggleDarkMode} />
      <div className='Card'>
        <Info imgPic='./../src/assets/Images/img.jpg' profileName='Mariama Seidu' profileStatus='Frontend Developer' profileWebsite='merrylyt@gmail.com'/>
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App;
