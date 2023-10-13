import { X } from "phosphor-react";
import { useState } from "react";

function Cookie() {
  const [cookieVisible, setCookieVisible] = useState(true);

  function onCookieClick() {
    setCookieVisible(false);
  }

  return (
    cookieVisible && (
      <div className=" w-full  fixed bg-white bottom-0 h-64 flex justify-center">
        <div className=" w-80 h-full flex flex-col pt-10 lg:items-center lg:flex-row lg:w-[800px] lg:justify-between">
          <p className="text-gray-600 pb-6 text-sm lg:w-80">
            By clicking “Accept All Cookies”, you agree to the storing of
            cookies on your device to enhance site navigation, analyze site
            usage, and assist in our marketing efforts.{" "}
          </p>
          <div className="flex flex-col gap-y-2 lg:w-80 lg:justify-center">
            <button
              onClick={() => onCookieClick()}
              className="bg-gymrose text-white py-2"
            >
              Reject All
            </button>
            <button
              onClick={() => onCookieClick()}
              className="bg-gymrose text-white py-2"
            >
              Accept All Cookies
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
      </div>
    )
  );
}

export default Cookie;
