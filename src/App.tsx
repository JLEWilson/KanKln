import React from 'react'
import join from './utils'
import About from './components/about'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <div className={join('text-center bg-background min-h-screen m-0 p-0')}>
      <div className={join('md:flex sticky')}>
        <Header />
      </div>
      <About />
    </div>
  )
}

export default App
