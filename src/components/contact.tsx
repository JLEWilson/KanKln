import React from 'react'

import Typography from '../Typography'
import join from '../utils'

const Contact = () => {
  return (
    <section
      className={join(
        'mt-10 fixed bottom-0 pb-5 left-0 right-0 md:px-20 px-5',
        'font-Changa font-light z-10',
      )}
    >
      <Typography
        variant='h4'
        className='text-text font-bold'
      >
        Your cleaner property starts here—schedule your quote today{' '}
      </Typography>
      <Typography
        variant='h4'
        className='text-text font-bold'
      >
        <span className='text-blue-500 hover:text-blue-700'>
          <a href='mailto:info@kankln.com'>info@kankln.com</a>
        </span>{' '}
        /{' '}
        <span className='text-blue-500 hover:text-blue-700 whitespace-nowrap'>
          (503) 807-8094
        </span>
      </Typography>
    </section>
  )
}

export default Contact
