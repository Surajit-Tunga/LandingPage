import HeroSec from "./components/HeroSec";
import Nav from "./components/Nav";


const App = () => {
  return (
    <>
     <Nav/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSec/>
     </div>
    </>
  );
}

export default App
