import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion";

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
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  function onNavActive() {
    setNavActive((prev) => !prev);
  }
  console.log(navActive);

  return (
    <header className="h-14 bg-sky-400 sm:flex sm:justify-between sm:h-20 sm:px-2  sm:items-center">
      <Link to="/">
        <p className="font-bold">ENERGYM</p>
      </Link>
      <button
        onClick={() => onNavActive()}
        className="absolute top-4 right-3 z-50 sm:hidden"
      >
        <svg
          width="29"
          height="21"
          viewBox="0 0 29 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="13" height="3" fill="black" />
          <rect x="16" y="18" width="13" height="3" fill="black" />
          <rect y="9" width="29" height="3" fill="black" />
        </svg>
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
         sm:flex sm:relative origin-top sm:flex-row justify-center flex text-3xl sm:text-base text-center    flex-col gap-y-7 sm:gap-x-3 bg-gray-200 top-0 right-0 bottom-0 z-40 left-0 py-40 px-8 sm:px-0 sm:py-0 sm:bg-opacity-0 sm:left-0 h-full fixed font-semibold"
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

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const menuVars = {
//     initial: {
//       scaleY: 0,
//     },
//     animate: {
//       scaleY: 1,
//     },
//     exit: {
//       scaleY: 0,
//     },
//   };

//   function onNavActive() {
//     setNavActive((prev) => !prev);
//   }
//   console.log(navActive);

//   return (
//     <motion.header
//       variants={menuVars}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="h-14 bg-sky-400 sm:flex sm:justify-between sm:h-20 sm:px-2  sm:items-center"
//     >
//       <Link to="/">
//         <p className="font-bold">ENERGYM</p>
//       </Link>
//       <button
//         onClick={() => onNavActive()}
//         className="absolute top-4 right-3 z-50 sm:hidden"
//       >
//         <svg
//           width="29"
//           height="21"
//           viewBox="0 0 29 21"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="13" height="3" fill="black" />
//           <rect x="16" y="18" width="13" height="3" fill="black" />
//           <rect y="9" width="29" height="3" fill="black" />
//         </svg>
//       </button>
//       <nav>
//         <ul
//           className={`${
//             navActive ? "translate-y-0" : ""
//           } sm:flex sm:relative sm:flex-row justify-center flex text-3xl sm:text-base text-center  sm:translate-x-0 sm:translate-y-0 translate-y-[-100%] transition-transform ease-out duration-700 flex-col gap-y-7 sm:gap-x-3 bg-gray-200 top-0 right-0 bottom-0 left-0 py-40 px-8 sm:px-0 sm:py-0 sm:bg-opacity-0 sm:left-0 h-full fixed font-semibold`}
//         >
//           <li>
//             <NavLink to="about">ABOUT</NavLink>
//           </li>
//           <li>
//             <NavLink to="services">SERVICES</NavLink>
//           </li>
//           <li>
//             <NavLink to="membership">MEMBERSHIP</NavLink>
//           </li>
//           <li>
//             <NavLink to="contact">CONTACT</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </motion.header>
//   );
// }

// export default Navbar;
