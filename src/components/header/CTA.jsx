import React from 'react'
import Resume2 from '../../assets/Resume2.pdf'

const CTA = () => {
  return (
    
    <div className='cta'>

        <a href={Resume2} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
        

    </div>
  )
}

export default CTA