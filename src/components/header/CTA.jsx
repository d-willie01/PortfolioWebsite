import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>

        <a href={Resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
        <a>Eat me big boi</a>

    </div>
  )
}

export default CTA