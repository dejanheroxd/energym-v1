import Button from "../../components/Button";
import joggingMan from "../../assets/jogging-man-neon.jpg";

function MotivationalBanner() {
  return (
    <div className="h-screen">
      <div>
        <div className="h-96 ">
          <img className="object-cover h-full w-full" src={joggingMan} alt="" />
        </div>
        <div className="text-center pb-4 border h-96 flex flex-col justify-center px-4 items-center">
          <p className="font-semibold text-2xl">The Onyx Experience</p>
          <p className="mt-5">
            {`At Energym, we're not just a fitness facility; we're your dedicated partner in helping you achieve and maintain a healthier, more active lifestyle. Our mission is to empower you with the knowledge and support you need to reach your fitness goals.`}
          </p>
          <Button className="border">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default MotivationalBanner;
