import { Link } from "react-router-dom";
import womanMatt from "../../assets/women-mat-min.jpg";
import asian from "../../assets/asian.jpg";
import manStick from "../../assets/man-stick.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

function ClassesSection() {
  const [t] = useTranslation("global");

  return (
    <div className="border-none  bg-gymblue flex justify-center text-center pb-9">
      <div className="w-72 pt-10 flex flex-col justify-center items-center">
        <p className="text-white font-semibold text-xl mb-4 lg:text-3xl lg:pt-14">
          {t("classes.header")}
        </p>
        <p className="text-white mb-7 lg:w-96 lg:pb-8">
          {t("classes.subText")}
        </p>
        <div className="lg:flex  lg:justify-center  lg:w-screen lg:h-96 lg:h-[450px] gap-x-20 xl:h-[600px] 2xl:h-[580px]">
          <div className="lg:overflow-hidden lg:w-96 2xl:w-[520px]">
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={womanMatt}
              alt=""
            />
          </div>
          <div className="lg:overflow-hidden hidden lg:block lg:w-96 2xl:w-[520px]">
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={asian}
              alt=""
            />
          </div>
          <div className="lg:overflow-hidden hidden lg:block lg:w-96 2xl:w-[520px]">
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={manStick}
              alt=""
            />
          </div>
        </div>
        <Link aria-label="Go to services page" to="/services">
          <button
            aria-label="Button"
            className="mt-9 border border-white sm:duration-200 text-black text-sm px-10 sm:hover:bg-transparent sm:hover:text-white sm:hover:border-white py-4 xl:my-14 xl:text-base xl:px-[46px] xl:py-[18px] rounded-full bg-white"
          >
            {t("classes.classCta")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ClassesSection;
