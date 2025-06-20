import logo from "../assets/logo.png";

const Nav= () => {
  return (
    <nav  className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex item-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2"
                    src= {logo} alt="" />
                    <span className="text-xl traking-tight">
                        Landing
                    </span>
                </div>
            </div>
        </div>

    </nav>
  );
}

export default Nav
