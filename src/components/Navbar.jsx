import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  function activateNav() {
    setNavActive(true);
  }

  function deactivateNav() {
    setNavActive(false);
  }

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 640;
      const isSmallScreen = window.innerWidth < 640;
      if (isLargeScreen) {
        activateNav();
      } else if (isSmallScreen) {
        deactivateNav();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  function onNavActive() {
    setNavActive((prev) => !prev);
  }

  return (
    <header className="h-16 flex items-center bg-white sm:flex sm:justify-between sm:h-20 sm:px-2  sm:items-center">
      <Link to="/">
        <p className="font-bold text-2xl pl-3">ENERGYM</p>
      </Link>
      <button
        onClick={() => onNavActive()}
        className="absolute top-[27px] right-4 z-50 sm:hidden"
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
         sm:flex sm:relative origin-top sm:flex-row justify-center flex text-3xl sm:text-base text-center    flex-col gap-y-7 sm:gap-x-3 bg-white top-0 right-0 bottom-0 z-40 left-0 py-40 px-8 sm:px-0 sm:py-0 sm:bg-opacity-0 sm:left-0 h-full fixed font-semibold"
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-3"
              >
                <div className="overflow-hidden">
                  <motion.li variants={mobileLinksVars}>
                    <NavLink to="about">ABOUT</NavLink>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li variants={mobileLinksVars}>
                    <NavLink to="services">SERVICES</NavLink>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li variants={mobileLinksVars}>
                    <NavLink to="membership">MEMBERSHIP</NavLink>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li variants={mobileLinksVars}>
                    <NavLink to="contact">CONTACT</NavLink>
                  </motion.li>
                </div>
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
