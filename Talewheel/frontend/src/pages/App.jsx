import { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection';
import Features from './Features';
import Interactive from './Interactive';
import Footer from './Footer';
import Progress from './Progress';

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection />
      <Features />
      <Interactive />
      <Progress />
      <Footer />
    </>
  )
}

export default App
