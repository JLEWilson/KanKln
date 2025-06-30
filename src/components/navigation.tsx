import React from 'react'
import Typography from '../Typography'
import join from '../utils'

interface NavigationProps {
  setRoute: (route: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ setRoute }) => {
  return (
    <div>
      <nav
        className={join(
          'flex justify-center md:space-x-10 space-x-4 p-4 text-white',
        )}
      >
        <button
          type='button'
          onClick={() => setRoute('home')}
          className='hover:underline'
        >
          <Typography
            className='text-text'
            variant='h4'
          >
            Home
          </Typography>
        </button>
        {/* <button
          type='button'
          onClick={() => setRoute('about')}
          className='hover:underline'
        >
          <Typography
            className='text-text'
            variant='h4'
          >
            About
          </Typography>
        </button> */}
        <button
          type='button'
          onClick={() => setRoute('services')}
          className='hover:underline'
        >
          <Typography
            className='text-text'
            variant='h4'
          >
            Services
          </Typography>
        </button>
      </nav>
    </div>
  )
}

export default Navigation
