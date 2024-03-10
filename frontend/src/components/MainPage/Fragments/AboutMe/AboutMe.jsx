import React from 'react'
import './AboutMe.css'
import nestjs from '../../../../assets/skills/nestjs.png'
import { Link } from 'react-router-dom'
export const AboutMe = () => {
  return (
    <div className='AboutMe c'>
      <Link to='/about' className='card c f'>
        <div className='text c f'>
          <h2>Nikolai Kaloyanov</h2>
          <img src={nestjs} alt="" />
          <h1>About Me</h1>
        </div>
      </Link>
    </div>
  )
}
