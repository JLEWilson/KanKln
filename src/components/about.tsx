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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        facilisis et lacus non porta. Suspendisse ut augue vitae augue facilisis
        fringilla commodo in velit. Integer blandit sodales leo, et scelerisque
        arcu faucibus non. Nulla in varius neque. Sed pulvinar libero odio.
        Aenean eget dolor pretium, sodales lacus eu, tempor velit. Curabitur
        mollis, nisl non eleifend volutpat, ex dui feugiat justo, eget
        sollicitudin felis risus mollis dolor. Pellentesque tincidunt ante
        tincidunt tortor tempus aliquet. Sed varius urna at dui maximus eleifend.
        In feugiat justo nec nisl interdum laoreet. Phasellus tristique urna vel
        tellus dapibus rhoncus. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus sit amet diam
        sollicitudin, congue risus a, faucibus ipsum. Integer efficitur, eros in
        accumsan auctor, mauris metus condimentum risus, et feugiat sem tortor
        porta elit. Phasellus pharetra, est sit amet vehicula porta, orci nisl
        vestibulum purus, id convallis sapien sapien eget arcu. Nulla massa leo,
        faucibus vitae bibendum vitae, faucibus sit amet neque. Nunc porttitor
        urna non felis porta, ac ornare nibh finibus. Maecenas lacus mi, accumsan
        sed commodo vel, eleifend sit amet libero.
      </Typography>
    </section>
  )
}

export default About
