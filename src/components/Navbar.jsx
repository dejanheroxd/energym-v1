import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [navBarActive, setNavBarActve] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

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
        // Use .matches to check if the media query matches
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
      if (window.innerWidth < 640) {
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
          className="h-16 origin-top flex items-center fixed top-0 left-0 right-0 z-50 bg-white sm:flex sm:justify-center sm:h-20 sm:px-2  sm:items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <Link to="/">
            <p
              className="font-bold text-2xl sm:top-6 pl-3 2xl:pl-8 fixed top-4 sm:left-0 z-50"
              onClick={() => deactivateNav()}
            >
              ENERGYM
            </p>
          </Link>
          <button
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
                    <div className="overflow-hidden lg:hover:text-gymrose duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink onClick={() => deactivateNav()} to="about">
                          ABOUT
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden lg:hover:text-gymrose duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink onClick={() => deactivateNav()} to="services">
                          SERVICES
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden lg:hover:text-gymrose duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink
                          onClick={() => deactivateNav()}
                          to="membership"
                        >
                          MEMBERSHIP
                        </NavLink>
                      </motion.li>
                    </div>
                    <div className="overflow-hidden lg:hover:text-gymrose duration-300">
                      <motion.li variants={mobileLinksVars}>
                        <NavLink onClick={() => deactivateNav()} to="contact">
                          CONTACT
                        </NavLink>
                      </motion.li>
                    </div>
                  </motion.div>
                </motion.ul>
              )}
            </AnimatePresence>
          </nav>
          <button className="bg-gymrose h-20 w-40 text-white fixed right-0 hidden sm:block sm:hover:bg-black duration-300">
            Join Now
          </button>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
