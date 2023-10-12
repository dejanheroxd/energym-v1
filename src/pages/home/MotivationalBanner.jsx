import Button from "../../components/Button";
import joggingManDesktop from "../../assets/jogging-man-neon-cop-min.jpg";
import joggingManMobile from "../../assets/jogging-man-neon-short-min.jpg";
import manWoman from "../../assets/man-woman-min.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function MotivationalBanner() {
  return (
    <div className="relative lg:h-[1290px]">
      <div className="lg:grid-row-2 lg:grid lg:mx-20 lg:absolute bg-white lg:w-[92%] xl:h-[1200px] lg:top-[-160px]">
        <div className="h-[770px] lg:h-full">
          <div className="lg:grid grid-cols-2">
            <div className="h-96 lg:h-[640px] overflow-hidden">
              <LazyLoadImage
                loading="lazy"
                className="object-cover h-full w-full hidden sm:block"
                src={joggingManDesktop} // Default image for PC
                alt=""
              />
              <LazyLoadImage
                loading="lazy"
                className="object-cover h-full w-full sm:hidden"
                src={joggingManMobile} // Mobile image
                alt=""
              />
            </div>
            <div className="text-center xl:text-left lg:text-left pb-4 h-96 xl:h-full flex lg:h-full flex-col justify-center px-4 items-center">
              <div className="w-80 xl:w-[500px] lg:w-[300px]">
                <p className="font-semibold text-2xl xl:text-3xl">
                  The Energym Experience
                </p>
                <p className="mt-5">
                  {`At Energym, we're not just a fitness facility; we're your dedicated partner in helping you achieve and maintain a healthier, more active lifestyle. Our mission is to empower you with the knowledge and support you need to reach your fitness goals.`}
                </p>
                <Link to="/about">
                  <Button className="border">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[770px] lg:h-full">
          <div className="lg:grid grid-cols-2">
            <div className="h-96 lg:h-[640px] overflow-hidden order-2">
              <LazyLoadImage
                loading="lazy"
                className="object-cover scale-[1.43] -translate-x-[35px] hue-rotate-[340deg] h-full w-full"
                src={manWoman}
                alt=""
              />
            </div>
            <div className="text-center lg:h-full pb-4 xl:text-left lg:text-left h-96 flex flex-col justify-center order-1 px-4 items-center">
              <div className="w-80 xl:w-[500px] lg:w-[300px]">
                <p className="font-semibold text-2xl">
                  Fitness Is for Everyone
                </p>
                <p className="mt-5">
                  {`We passionately believe that fitness is a journey meant for everyone. Whether you're an experienced athlete or taking your first steps towards a healthier lifestyle, our gym welcomes individuals of all backgrounds and fitness levels.`}
                </p>
                <Link to="/membership">
                  <Button className="border">Reserve a Spot</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotivationalBanner;
