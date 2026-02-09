import React from 'react'
import AboutBanner from '../components/about/AboutBanner'
import Why from '../components/about/Why'
import Works from '../components/about/Works'
import  Goal  from '../components/about/Goal'

export const About = () => {
  return (
    <div className='about-page'>
        <AboutBanner/>
        <Why/>
        <Works/>
        <Goal/>
    </div>
  )
}

