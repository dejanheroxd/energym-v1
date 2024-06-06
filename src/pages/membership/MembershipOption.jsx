import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MembershipOption({ rarity, price, duration, popular }) {
  const [t] = useTranslation("global");

  return (
    <div className="flex flex-col px-5 2xl:px-14 justify-center items-center pt-10 ">
      <div className="border h-80 2xl:h-[380px] px-8 py-8 text-center relative w-80 flex xl:bg-white flex-col border-black">
        {popular && (
          <div className="bg-[#68c6eb] xl:border xl:border-black text-white w-32 h-10 flex absolute -top-5 left-24 items-center justify-center">
            <p>Most Popular</p>
          </div>
        )}
        <p className="font-semibold text-xl 2xl:pb-2 2xl:pt-4">{rarity}</p>
        <div className="flex justify-center pt-3 pb-5 2xl:pb-7">
          <div className="relative flex items-center justify-center h-20 w-32">
            <p className="font-semibold absolute top-0 left-0">$</p>
            <p className="font-semibold text-6xl">{price}</p>
          </div>
        </div>
        <p className="text-sm pb-4 2xl:pb-6 2xl:pt-4">{duration}</p>
        <Link aria-label="Go to contact page" to="/contact">
          <button
            aria-label="Button"
            className="py-3 px-16 text-white duration-200 bg-gymGreen sm:hover:bg-gymGreen"
          >
            {t("member.selectBtn")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MembershipOption;
