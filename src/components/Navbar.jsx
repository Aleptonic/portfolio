
import logo from '../assets/brain.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-11' src={logo} alt='Kevin Rush Logo'  />
        
    </div>
    <div className='flex items-end gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
    </div>


    
    
  </nav>
}

export default Navbar
        