import React from 'react'
import Typography from '../Typography'
import join from '../utils'

const About = () => {
  return (
    <section
      className={join(
        'mt-20 md:mx-20 mx-5',
        'font-Changa font-light',
        'snap-center',
      )}
    >
      <Typography
        variant='h1'
        className='text-text'
      >
        What We do
      </Typography>
      <hr className='my-2 mx-[30vw] h-2' />
      <Typography
        variant='h4'
        className='text-secondary'
      >
        Now under new management!
      </Typography>
      <Typography
        variant='h4'
        className='text-secondary'
      >
        KanKln provides expedient, high quality, and eco-friendly cleaning
        services for dumpsters, trash cans, and other waste containers. Using
        custom patented sanitizers we clean and sanitize your waste containers.
      </Typography>
    </section>
  )
}

export default About
