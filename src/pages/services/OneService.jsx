import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OneService(props) {
  const [t] = useTranslation("global");

  const { data, openPopUp } = props;

  const { oneClassName, classImage, description, hour, hour2, price } = data;

  return (
    <div className="flex justify-center pt-8 pb-8">
      <div className="w-[320px] border border-gymGreen text-white flex flex-col items-center lg:flex-row lg:w-[800px] lg:h-[430px] 2xl:w-[900px]">
        <div className="overflow-hidden h-52 w-full lg:w-[400px] lg:h-full 2xl:w-[450px]">
          <img src={classImage} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="w-64 py-6 lg:w-[400px] lg:px-12 2xl:w-[450px]">
          <p className="font-semibold text-lg">{oneClassName}</p>
          <p className="py-4">{description}</p>
          <a href="" className="underline"></a>
          <div className="pt-1 pb-4">
            <span className="h-[1px] bg-gray-400 w-60 block"></span>
          </div>
          {/* <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-x-[6px]">
              <div className="flex gap-2">
                <p>{t("services.day1")} </p>
                {hour}, {hour2}
              </div>
              <div className="flex gap-3">
                <p>{t("services.day5")}</p>
                {hour}
              </div>
            </div>

            <p className="pb-4">${price}</p>
          </div> */}
          <Link aria-label="Go to contact page">
            <button
              onClick={() => openPopUp()}
              aria-label="Button"
              className="w-full py-2 duration-500 text-white rounded-full bg-gymGreen lg:w-28 sm:hover:bg-gymGreen"
            >
              Προγραμμα
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OneService;
