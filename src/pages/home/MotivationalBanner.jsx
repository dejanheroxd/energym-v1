import Button from "../../components/Button";
import joggingMan from "../../assets/jogging-man-neon-cop-min.jpg";
import manWoman from "../../assets/man-woman-min.jpg";

function MotivationalBanner() {
  return (
    <>
      <div className="h-screen ">
        <div>
          <div className="h-96 overflow-hidden">
            <img
              className="object-cover scale-[1.43] h-full w-full"
              src={joggingMan}
              alt=""
            />
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
      <div className="h-screen pt-7">
        <div>
          <div className="h-96 overflow-hidden">
            <img
              className="object-cover scale-[1.43] h-full w-full"
              src={manWoman}
              alt=""
            />
          </div>
          <div className="text-center pb-4 border h-96 flex flex-col justify-center px-4 items-center">
            <p className="font-semibold text-2xl">Fitness Is for Everyone</p>
            <p className="mt-5">
              {`We passionately believe that fitness is a journey meant for everyone. Whether you're an experienced athlete or taking your first steps towards a healthier lifestyle, our gym welcomes individuals of all backgrounds and fitness levels.`}
            </p>
            <Button className="border">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotivationalBanner;
