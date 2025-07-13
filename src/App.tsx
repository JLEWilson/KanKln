import React from 'react'
import join from './utils'
// import About from './components/about'
import Home from './components/home'
import Header from './components/header'
import Contact from './components/contact'
import Navigation from './components/navigation'
import Services from './components/servicesSection'
import VideoBackground from './components/videoBackground'

const App: React.FC = () => {
  const [route, setRoute] = React.useState('home')

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <div className='relative z-0 text-center pb-24 bg-background min-h-screen'>
        {/* Conditionally show video background for home route */}
        {route === 'home' && (
          <div className={join('absolute top-0 left-0 w-full h-full', ' -z-10')}>
            <VideoBackground
              src='/video_WashA.mp4'
              fallbackColor='bg-gray-900'
            />
          </div>
        )}
        {/* Main content */}
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
    </div>
  )
}

export default App
