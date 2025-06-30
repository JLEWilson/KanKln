import React from 'react'
import join from './utils'
// import About from './components/about'
import Home from './components/home'
import Header from './components/header'
import Contact from './components/contact'
import Navigation from './components/navigation'
import Services from './components/servicesSection'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')
  return (
    <div className={join('text-center pb-24', ' bg-background min-h-screen')}>
      <div
        className={join(
          'flex flex-col md:flex-row',
          'items-center justify-between px-6 py-4 w-full',
        )}
      >
        <Header />
        <Navigation setRoute={setRoute} />
      </div>
      {route === 'home' && <Home />}
      {route === 'services' && <Services />}
      <Contact />
    </div>
  )
}

export default App
