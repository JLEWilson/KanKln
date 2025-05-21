import React from 'react'

import Typography from '../Typography'
import join from '../utils'

const Contact = () => {
  return (
    <section
      className={join('mt-20  bottom-5 md:mx-20 mx-5', 'font-Changa font-light')}
    >
      <hr className='my-2 mx-[30vw] h-2' />
      <Typography
        variant='h4'
        className='text-text'
      >
        For inquiries, please contact us at: Josh&apos;semail.com
      </Typography>
    </section>
  )
}

export default Contact
