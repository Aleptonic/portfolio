import { HERO_CONTENT } from "../constants"
import vid2 from '../assets/vid2.mp4'
const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-36">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl lg:pl-9">Akshay Gokhale</h1>
                <span className="bg-gradient-to-r from-green-300 via-teal-500 to-blue-500
                bg-clip-text text-4xl tracking-tight text-transparent lg:pl-9 ">Full Stack Developer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter lg:pl-9">{HERO_CONTENT}</p>


            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-9">
        <div className="flex justify-center">
            <video
              className="mx-2 w-full h-auto max-w-sm rounded-lg lg:pl-9"
              src={vid2}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
    </div>
  </div>
}

export default Hero
