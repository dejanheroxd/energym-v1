import { Link } from "react-router-dom";
import womanMatt from "../../assets/twol.jpg";
import asian from "../../assets/dumbbells.jpg";
import manStick from "../../assets/trainer.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function ClassesSection() {
  const [t] = useTranslation("global");

  return (
    <div className="border-none  bg-gymGreen flex justify-center text-center pb-9">
      <div className="w-72 pt-10 flex flex-col justify-center items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="text-white font-semibold text-xl mb-4 lg:text-3xl lg:pt-14"
        >
          {t("classes.header")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
          viewport={{ once: true }}
          className="text-white mb-7 lg:w-96 lg:pb-8"
        >
          {t("classes.subText")}
        </motion.p>
        <div className="lg:flex  lg:justify-center  lg:w-screen lg:h-96 lg:h-[450px] gap-x-20 xl:h-[600px] 2xl:h-[580px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="lg:overflow-hidden lg:w-96 2xl:w-[520px]"
          >
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={womanMatt}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.7 },
            }}
            viewport={{ once: true }}
            className="lg:overflow-hidden hidden lg:block lg:w-96 2xl:w-[520px]"
          >
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={asian}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1.2 },
            }}
            viewport={{ once: true }}
            className="lg:overflow-hidden hidden lg:block lg:w-96 2xl:w-[520px]"
          >
            <LazyLoadImage
              loading="lazy"
              className="h-64 w-full lg:w-full lg:object-cover lg:h-full"
              src={manStick}
              alt=""
            />
          </motion.div>
        </div>
        <Link aria-label="Go to services page" to="/services">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
            viewport={{ once: true }}
            aria-label="Button"
            className="mt-9 border border-white sm:duration-200 text-black text-sm px-10 sm:hover:bg-transparent sm:hover:text-white sm:hover:border-white py-4 xl:my-14 xl:text-base xl:px-[46px] xl:py-[18px] rounded-full bg-white"
          >
            {t("classes.classCta")}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default ClassesSection;
