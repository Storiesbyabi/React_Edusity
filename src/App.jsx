import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our Program" title='What We Offer'/>
      <Program/>
      <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title='Campus Photos'/>
        <Campus />
        <Title subTitle="TESTIMONIALS" title='What Student Says'/>
        <Testimonials />
        <Title subTitle="Contact Us" title='Get in Touch'/>
        <Content/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div> 
  )
}

export default App
