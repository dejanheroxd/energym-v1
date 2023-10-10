import Button from "../../components/Button";

function HeroSection() {
  return (
    <div className="relative justify-center items-center h-[86vh] w-screen flex-row flex bg-woman">
      <div className=" h-96 w-80 text-center">
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
  );
}

export default HeroSection;
