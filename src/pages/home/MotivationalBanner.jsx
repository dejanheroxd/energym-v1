import Button from "../../components/Button";

function MotivationalBanner() {
  return (
    <div className="h-screen">
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="text-center">
          <p className="font-bold">The Onyx Experience</p>
          <p>
            {`At Energym, we're more than just a fitness facility. We're your partner in achieving a healthier, more active lifestyle.  `}
          </p>
          <Button className="border border-black">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default MotivationalBanner;
