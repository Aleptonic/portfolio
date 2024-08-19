
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised selection: bg-cy300 selection:text-cy900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <Navbar />
      </div>
      
      <Hero />
      <About />
    </div>
  )
}

export default App
