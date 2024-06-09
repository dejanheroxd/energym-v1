import Button from "../../components/Button";
import deadliftDesktop from "../../assets/deadlift1.jpg";
import deadliftMobile from "../../assets/deadlift1.jpg";
import manWoman from "../../assets/dumbell1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function MotivationalBanner() {
  const [t] = useTranslation("global");

  return (
    <div className="relative lg:h-[1290px]">
      <div className="lg:grid-row-2 lg:grid lg:mx-20 lg:absolute bg-white lg:w-[92%] xl:h-[1300px] lg:top-[-160px]">
        <div className="h-[770px] lg:h-full">
          <div className="lg:grid grid-cols-2">
            <div className="h-96 lg:h-[640px] overflow-hidden">
              <LazyLoadImage
                loading="lazy"
                className="object-cover h-full w-full hidden sm:block"
                src={deadliftDesktop} // Default image for PC
                alt=""
              />
              <LazyLoadImage
                loading="lazy"
                className="object-cover h-full w-full sm:hidden"
                src={deadliftMobile} // Mobile image
                alt=""
              />
            </div>
            <div className="text-center xl:text-left lg:text-left pb-4 h-96 xl:h-full flex lg:h-full flex-col justify-center px-4 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                viewport={{ once: true }}
                className="w-80 xl:w-[500px] lg:w-[300px]"
              >
                <p className="font-semibold text-2xl xl:text-3xl">
                  {t("motivation.header")}
                </p>
                <p className="mt-5">{t("motivation.subText")}</p>
                <Link aria-label="Go to about page" to="/about">
                  <Button className="border">{t("motivation.motCta")}</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-[770px] lg:h-full">
          <div className="lg:grid grid-cols-2 ">
            <svg
              width="354"
              height="366"
              viewBox="0 0 454 966"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-36 hidden xl:block rotate-180 right-0 z-[40]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 257.6L227 0L454 257.6L397.25 322L227 128.8L56.75 322L0 257.6Z"
                fill="#AFC92B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 901.6L227 644L454 901.6L397.25 966L227 772.8L56.75 966L0 901.6Z"
                fill="#AFC92B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 579.6L227 322L454 579.6L397.25 644L227 450.8L56.75 644L0 579.6Z"
                fill="#AFC92B"
              />
            </svg>
            <div className="h-96 lg:h-[661px] overflow-hidden order-2">
              <LazyLoadImage
                loading="lazy"
                className="object-cover scale-[1.43] -translate-x-[35px] hue-rotate-[340deg] h-full w-full"
                src={manWoman}
                alt=""
              />
            </div>
            <div className="text-center lg:h-full pb-4 xl:text-left lg:text-left h-96 flex flex-col justify-center order-1 px-4 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3001 },
                }}
                viewport={{ once: true }}
                className="w-80 xl:w-[500px] lg:w-[300px]"
              >
                <p className="font-semibold text-2xl xl:text-3xl">
                  {t("motivationSecond.header")}
                </p>
                <p className="mt-5">{t("motivationSecond.subText")}</p>
                <Link aria-label="Go to services page" to="/services">
                  <Button className="border">
                    {t("motivationSecond.motCta")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotivationalBanner;
