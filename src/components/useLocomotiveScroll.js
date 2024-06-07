// components/useLocomotiveScroll.js
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.001, // Adjust this value to control the scroll speed. Lower is slower.
    });

    locomotiveScroll.on("scroll", () => {
      // Update something on scroll if needed
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
