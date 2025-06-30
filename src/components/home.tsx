import React from 'react'
import join from '../utils'
import Typography from '../Typography'

const Home = () => {
  return (
    <section
      className={join('mb-10 md:mt-20 md:px-20 px-5', 'font-Changa font-light')}
    >
      <Typography
        variant='h1'
        className='text-text'
      >
        Now Under New Management!
      </Typography>
      <hr className='my-2 mx-[30vw] h-2' />
      <Typography
        variant='h4'
        className='text-secondary'
      >
        Offering hot water pressure washing and trash bin sanitization services
        to the greater Portland area, KanKln uses top-of-the-line equipment and
        eco-friendly biodegradable cleaning solutions to restore your property’s
        appearance while protecting the environment.
      </Typography>
    </section>
  )
}
export default Home
