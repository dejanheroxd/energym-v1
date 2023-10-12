import { useEffect, useState } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100 " : "opacity-0 "
      } p-3 fixed rounded-full transition duration-500 px-[8px] py-[13px] bottom-[25%] right-7 text-white bg-gymrose`}
    >
      <svg
        width="23"
        height="13"
        viewBox="0 0 23 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6938 11.1506L12.239 0.317272C12.043 0.114111 11.777 0 11.4998 0C11.2224 0 10.9565 0.114183 10.7605 0.317344L0.306213 11.1507C-0.102071 11.5737 -0.102071 12.2596 0.306213 12.6827C0.714428 13.1057 1.37641 13.1058 1.78469 12.6827L11.4998 2.61545L21.2153 12.6827C21.4194 12.8943 21.687 13 21.9546 13C22.2221 13 22.4897 12.8943 22.6938 12.6826C23.1021 12.2596 23.1021 11.5737 22.6938 11.1506Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default BackToTopButton;
