import React from 'react'
import CurvyButton from './CurvyButton'

// type Props = {}

const outlineGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #0B6AEA 4.37%, #9B51E0 22.78%, #EB5757 35.37%, #B38E74 50.38%, #5F9261 57.65%, #219653 62.97%, #F2994A 79.92%, #7107D5 96.39%)";


function handleClick() {
    console.log('Button clicked!');
  }

function WhatWeDoSection({}) {
  return (
    <>
    <div><h3 className='text-6xl font-bold font-sans'>WHAT WE DO</h3></div>
    <div className='flex flex-col gap-6'>
      <CurvyButton color='#0A99B9' onClick={handleClick}>WEB DESIGN</CurvyButton>
      <CurvyButton color='#5F9261' onClick={handleClick}>BRANDING</CurvyButton>
      <CurvyButton color='#440083' onClick={handleClick}>GRAPHIC DESIGN</CurvyButton>
      <CurvyButton color='#C10682' onClick={handleClick}>MESSAGING</CurvyButton>
    </div></>
  )
}

export default WhatWeDoSection