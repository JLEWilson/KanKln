import React from 'react'
import join from '../utils'
import Typeography from '../Typography'

const services = [
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    img: '/images/Driveway.webp',
    subtitle: 'Patios • Driveways • Sidewalks',
    description: `High-temp pressure washing removes dirt, mold, oil & grime 
      from concrete surfaces.`,
  },
  {
    id: 'bin-sanitizing',
    title: 'Bin & Dumpster Sanitizing',
    img: '/images/KanKln_CanCleaner.webp',
    subtitle: '200°F water + eco-safe chemicals',
    description: `Sanitize and deodorize trash bins and 
      dumpsters using biodegradable cleaners and high-pressure heat.`,
  },
]

const Services = () => {
  return (
    <section
      className={join(
        'flex flex-col md:flex-row gap-6 justify-evenly items-center',
        'px-10 ',
      )}
    >
      {services.map((service) => (
        <div
          key={service.id}
          className={join(
            'rounded-2xl shadow-md p-4 ',
            'bg-cover bg-center bg-no-repeat',
            'text-white relative overflow-hidden min-h-[220px]',
            'min-h-[300px] md:min-h-[400px] flex',
          )}
          style={
            service.img
              ? { backgroundImage: `url(${service.img})` }
              : { backgroundColor: 'white' }
          }
        >
          <div className='absolute inset-0 bg-black/30' />
          <div className='relative z-10 p-4 rounded-lg '>
            <div className='relative py-4 flex items-center justify-center'>
              <div className='text-center mx-auto'>
                <Typeography
                  variant='h3'
                  className='text-text font-bold'
                >
                  {service.title}
                </Typeography>
                <Typeography
                  className='text-text font-bold'
                  variant='body'
                >
                  {service.subtitle}
                </Typeography>
              </div>
            </div>
            <div
              className={join(
                'p-4 h-full pb-20',
                'rounded-lg flex justify-center items-center',
              )}
            >
              <Typeography
                className='text-text font-bold  text-center'
                variant='h5'
              >
                {service.description}
              </Typeography>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services
