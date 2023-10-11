// import neonLightDesktop from "../../assets/neon-light-min.jpg";
// import neonLightMobile from "../../assets/neon-light-mobile-min.jpg";

// function HeroSection() {
//   return (
//     <div className="relative justify-center items-center h-[86vh] w-screen flex-row flex">
//       <img
//         src={neonLightDesktop} // Default image for PC
//         alt="Background Image"
//         className="absolute inset-0 w-full h-full object-cover bg-woman hidden sm:block"
//       />
//       <img
//         src={neonLightMobile} // Mobile image
//         alt="Background Image"
//         className="absolute inset-0 w-full h-full object-cover bg-woman  sm:hidden"
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="h-96 w-80 text-center">
//           <h1 className="text-white font-semibold text-5xl">
//             Welcome to Energym
//           </h1>
//           <h2 className="text-white font-semibold text-2xl mt-6">
//             The fitness facility for all of your needs
//           </h2>
//           <button className="mt-9 text-black text-sm px-10 py-4 rounded-full bg-white">
//             Join Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import neonLightDesktop from "../../assets/neon-light-min.jpg";
import neonLightMobile from "../../assets/neon-light-mobile-min.jpg";

function HeroSection() {
  return (
    <div className="relative justify-center items-center h-[86vh] w-screen flex-row flex">
      <picture>
        <source
          srcSet={neonLightMobile}
          media="(max-width: 767px)" // Load this image for small screens
        />
        <img
          src={neonLightDesktop}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover bg-woman"
        />
      </picture>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-80 text-center">
          <h1 className="text-white font-semibold text-5xl">
            Welcome to Energym
          </h1>
          <h2 className="text-white font-semibold text-2xl mt-6">
            The fitness facility for all of your needs
          </h2>
          <button className="mt-9 text-black text-sm px-10 py-4 rounded-full bg-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
