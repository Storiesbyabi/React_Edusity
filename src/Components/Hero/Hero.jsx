import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark_arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>We Ensure better education for a better world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti, esse in facilis amet omnis sit tempora doloremque quos enim necessitatibus impedit eius nisi, eligendi vel porro quas! Dolore, aperiam!</p>
        <button className='btn'>Explore more <img src={dark_arrow}/></button>
        
        </div>

    </div>
  )
}

export default Hero