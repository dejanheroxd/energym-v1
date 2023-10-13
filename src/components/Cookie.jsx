import { AnimatePresence, motion } from "framer-motion";
import { X } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Cookie() {
  const [t] = useTranslation("global");

  const [cookieVisible, setCookieVisible] = useState(true);

  function onCookieClick() {
    setCookieVisible(false);
  }

  const cookieVars = {
    initial: { opacity: 0, y: 50, transition: { duration: 1 } },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {cookieVisible && (
        <motion.div
          variants={cookieVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" w-full h-[290px] fixed bg-white bottom-0 flex justify-center"
        >
          <div className=" w-80 h-full flex flex-col pt-10 lg:items-center lg:flex-row lg:w-[800px] lg:justify-between">
            <p className="text-gray-600 pb-6 text-sm lg:w-80">
              {t("cookie.header")}
            </p>
            <div className="flex flex-col gap-y-2 lg:w-80 lg:justify-center">
              <button
                onClick={() => onCookieClick()}
                className="bg-gymrose text-white py-2"
              >
                {t("cookie.reject")}
              </button>
              <button
                onClick={() => onCookieClick()}
                className="bg-gymrose text-white py-2"
              >
                {t("cookie.accept")}
              </button>
            </div>
          </div>
          <button>
            <X
              onClick={() => onCookieClick()}
              size={19}
              weight="bold"
              className="absolute top-3 right-3"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cookie;
