import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import Nav from "./components/Nav";
import Price from "./components/Price";


const App = () => {
  return (
    <>
     <Nav/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSec/>
     </div>
     <Feature/>
     <Price/>
     <Footer/>
    </>
  );
}

export default App
