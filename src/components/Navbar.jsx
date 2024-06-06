import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [navActive, setNavActive] = useState(false);
  const [navBarActive, setNavBarActve] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  function onNavActive() {
    setNavActive((prev) => !prev);

    document.body.classList.toggle("no-scroll", !navActive);
  }

  function activateNav() {
    setNavActive(true);
  }

  function deactivateNav() {
    if (window.innerWidth < 640) {
      setNavActive(false);
      document.body.classList.remove("no-scroll");
    }
  }

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 640px)");

    const handleResize = () => {
      if (isLargeScreen.matches) {
        activateNav();
      } else {
        deactivateNav();
      }
    };

    handleResize();

    isLargeScreen.addEventListener("change", handleResize);

    return () => {
      isLargeScreen.removeEventListener("change", handleResize);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY && window.innerWidth < 640) {
      // If scrolling up, show the navigation
      setNavBarActve(true);
    } else {
      // If scrolling down, hide the navigation
      if (window.innerWidth < 640 && currentScrollY > 80) {
        setNavBarActve(false);
      }
    }

    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5 },
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const mobileLinksVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.2 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.2 },
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <AnimatePresence>
      {navBarActive && (
        <motion.header
          variants={navVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-16 origin-top flex items-center fixed top-0 left-0 right-0 z-50 bg-black/40 sm:flex sm:justify-center sm:h-20 sm:px-2  sm:items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <Link aria-label="Go to home page" to="/">
            <div
              className="font-bold text-2xl sm:top-6 pl-3 2xl:pl-8 fixed top-4 sm:left-0 z-50"
              onClick={() => deactivateNav()}
            >
              <svg
                width="135"
                height="45"
                viewBox="0 0 2116 664"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="2116" height="664" fill="url(#pattern0_1_2)" />
                <defs>
                  <pattern
                    id="pattern0_1_2"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_2"
                      transform="matrix(0.00140717 0 0 0.0044843 -0.121267 0)"
                    />
                  </pattern>
                  <image
                    id="image0_1_2"
                    width="883"
                    height="223"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3MAAADfCAYAAABcf4pyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuMTRlY2I0MiwgMjAyMi8xMi8wMi0xOToxMjo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wNi0wNlQxMjoxNzoyMyswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDYtMDZUMTM6NTI6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDYtMDZUMTM6NTI6MzUrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmM2YyODcyLTdiYmYtZWI0MC04Yzc3LTlmOTFkY2MyMjFmYSIgeG1wTU06RG9jdW1lbnRJRD0i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"
                  />
                </defs>
              </svg>
            </div>
          </Link>
          <button
            aria-label="Button"
            onClick={() => onNavActive()}
            className="absolute top-[13px] h-10 w-12 flex justify-center items-center right-4 z-50 sm:hidden"
          >
            <div>
              <span
                className={`bg-black h-[3px] duration-300  w-7 block mb-1 ${
                  navActive ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>

              <span
                className={`bg-black h-[3px] duration-300  w-7 block ${
                  navActive ? "-rotate-45 translate-y-[-3px]" : ""
                }`}
              ></span>
            </div>
          </button>
          <nav>
            <AnimatePresence>
              {navActive && (
                <motion.ul
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="
              sm:flex sm:relative origin-top sm:flex-row justify-center flex text-3xl sm:text-base text-center sm:pr-2 flex-col gap-y-7 sm:gap-x-3 bg-white top-0 right-0 bottom-0 z-40 left-0 py-40 px-8 sm:px-0 sm:py-0 sm:bg-opacity-0 sm:left-0 h-full fixed font-semibold"
                >
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-3 lg:gap-x-10 "
                  >
                    <div className="overflow-hidden text-white lg:hover:text-gymGreen duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink
                          aria-label="Go to about page"
                          onClick={() => deactivateNav()}
                          to="about"
                        >
                          {t("navigation.navItemFirst")}
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden text-white lg:hover:text-gymGreen duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink
                          aria-label="Go to services page"
                          onClick={() => deactivateNav()}
                          to="services"
                        >
                          {t("navigation.navItemSecond")}
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden text-white lg:hover:text-gymGreen duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink
                          aria-label="Go to membership page"
                          onClick={() => deactivateNav()}
                          to="membership"
                        >
                          {t("navigation.navItemThird")}
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden text-white lg:hover:text-gymGreen duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink
                          aria-label="Go to contact page"
                          onClick={() => deactivateNav()}
                          to="contact"
                        >
                          {t("navigation.navItemFourth")}
                        </NavLink>
                      </motion.li>
                    </div>
                  </motion.div>
                </motion.ul>
              )}
            </AnimatePresence>
          </nav>
          <Link
            aria-label="Go to membership page"
            to="/membership"
            className="fixed right-0"
          >
            <button
              aria-label="Button"
              className="bg-gymGreen h-20 w-40 text-white  hidden sm:block sm:hover:bg-[#99af27] duration-300"
            >
              {t("navigation.navCta")}
            </button>
          </Link>
          <div className="absolute top-[11px] right-20 gap-x-2 flex flex-row sm:gap-x-3 sm:absolute sm:top-5 sm:right-48 ">
            <button
              onClick={() => handleChangeLanguage("en")}
              className="flex flex-col items-center sm:flex sm:gap-x-1 sm:items-center"
            >
              <img
                src="https://flagsapi.com/GB/flat/64.png"
                className="w-6"
              ></img>
              <p className="text-sm text-gray-500">EN</p>
            </button>
            <button
              onClick={() => handleChangeLanguage("gr")}
              className="flex flex-col items-center sm:flex sm:gap-x-1 sm:items-center"
            >
              <img
                src="https://flagsapi.com/GR/flat/64.png"
                className="w-6"
              ></img>
              <p className="text-sm text-gray-500">GR</p>
            </button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
