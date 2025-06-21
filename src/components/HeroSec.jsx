import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const HeroSec = () => {
  return (
    <>
       <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Welcome to The 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> Landing Page</span> 
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl tracking-wide">
            Made with React & Tailwind CSS. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, vel!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
             <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white text-center w-full sm:w-auto">
                Start For Free
             </a>
            <a href="#" className="py-3 px-4 rounded-md border text-center w-full sm:w-auto">
               Documentation
             </a>
          </div>
          <div className="flex mt-10 justfy-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4" src={video1} type ="video/mp4">Your Brouser does not support video.</video>
               <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4" src={video2} type ="video/mp4">Your Brouser does not support video.</video>
          </div>
       </div>
    
    </>
  )
}

export default HeroSec
