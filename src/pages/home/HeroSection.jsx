import neonLightDesktop from "../../assets/neon-light-min.jpg";
import neonLightMobile from "../../assets/neon-light-mobile-min.jpg";

// function HeroSection() {
//   return (
//     <div className="relative justify-center overflow-hidden items-center h-[105vh] w-screen flex-row flex">
//       <img
//         src={neonLightDesktop} // Default image for PC
//         alt="Background Image"
//         className="absolute inset-0 w-full h-full  object-cover hidden sm:block"
//       />
//       <img
//         src={neonLightMobile} // Mobile image
//         alt="Background Image"
//         className="absolute inset-0 w-full h-full object-cover scale-[1] sm:hidden"
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

function HeroSection() {
  return (
    <div className="relative justify-center overflow-hidden items-center h-[105vh] w-screen flex-row flex">
      <picture>
        {/* This source element is for screens with a width of 640px or larger (desktop) */}
        <source srcSet={neonLightDesktop} media="(min-width: 640px)" />
        {/* The img element for screens smaller than 640px (smartphone) */}
        <img
          src={neonLightMobile}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover scale-[1] sm:hidden"
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
