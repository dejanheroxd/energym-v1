import { Link } from "react-router-dom";
import neonLightDesktop from "../../assets/neon-light-min.jpg";
import neonLightMobile from "../../assets/neon-light-mobile-min.jpg";

function HeroSection() {
  return (
    <div className="relative justify-center overflow-hidden items-center h-[105vh] w-screen flex-row flex">
      <picture>
        <img
          src={neonLightDesktop}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover scale-[1] hidden sm:block"
        />
        <img
          src={neonLightMobile}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover scale-[1] sm:hidden"
        />
      </picture>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-80 lg:w-[1400px] 2xl:w-[2000px] xl:w-[850px] text-center">
          <h1 className="text-white font-semibold text-5xl xl:text-6xl 2xl:text-[6rem]">
            Welcome to ENERGYM
          </h1>
          <h2 className="text-white font-semibold text-2xl mt-6 2xl:text-3xl">
            The fitness facility for all of your needs
          </h2>
          <div>
            <Link to="/membership">
              <button className="mt-9 border border-white text-black text-sm px-10 py-4 rounded-full bg-white duration-200 xl:px-12 xl:py-5 xl:hover:bg-transparent xl:hover:text-white xl:hover:border-white xl:hover:border ">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
