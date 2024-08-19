
import about from '../assets/aboutAkshay.jpg';
import { ABOUT_TEXT } from '../constants';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-green-300 via-teal-500 to-blue-500
                bg-clip-text text-4xl tracking-tight text-transparent lg:pl-9 ">About Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-9">
                <div className="flex items-center justify-start">
                    <img src={about} alt="About" className=" w-3/4 max-w-sm rounded-2xl object-cover" />
                </div>
                </div>
                <div className='w-full lg:w-1/2'>
                  <div className='flex justify-center lg: justify-center'>
                    <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
                  </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
