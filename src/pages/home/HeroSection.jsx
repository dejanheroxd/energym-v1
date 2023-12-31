import { Link } from "react-router-dom";
import neonLightDesktop from "../../assets/neon-light-min.jpg";
import neonLightMobile from "../../assets/neon-light-mobile-min.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function HeroSection() {
  const [t] = useTranslation("global");

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
        <div className="h-96 w-80 md:w-[350px] lg:w-[1400px] 2xl:w-[2000px] xl:w-[850px] text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
            className="text-white origin-bottom font-semibold w-[330px] md:w-full text-5xl xl:text-6xl 2xl:text-[6rem]"
          >
            {t("hero.header")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5, delay: 1 } }}
            className="text-white font-semibold text-2xl mt-6 2xl:text-3xl"
          >
            {t("hero.subheader")}
          </motion.h2>
          <div>
            <Link aria-label="Go to membership page" to="/membership">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.5, delay: 1.5 },
                }}
                aria-label="Button"
                className="mt-9 border border-white text-black text-sm px-10 py-4 rounded-full bg-white duration-200 xl:px-12 xl:py-5 xl:hover:bg-transparent xl:hover:text-white xl:hover:border-white xl:hover:border "
              >
                {t("navigation.navCta")}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
