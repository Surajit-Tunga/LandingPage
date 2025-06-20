import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const HeroSec = () => {
  return (
    <>
       <div className="felx flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Welcome to The 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> Landing Page</span> 
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl tracking-wide">
            Made with React & Tailwind CSS. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum commodi voluptatem eligendi laudantium! Rerum tenetur quisquam ipsum libero quia illum.
          </p>
       </div>
    
    </>
  )
}

export default HeroSec
