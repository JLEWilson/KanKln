import React from 'react'
import join from '../utils'
import TitleSVG from '../images/TitleSVG'

const Header = () => {
  return (
    <div className={join('bg-black')}>
      <TitleSVG />
    </div>
  )
}

export default Header
