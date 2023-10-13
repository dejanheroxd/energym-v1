import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import family from "../../assets/family-min.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const [t] = useTranslation("global");

  return (
    <div>
      <SectionHeaderBlock
        header={t("about.heroHeader")}
        description={t("about.heroSubHeader")}
        overflow={true}
      />

      <div className="lg:flex justify-center lg:relative lg:pb-[450px] 2xl:pb-[740px]">
        <div className="pb-4 lg:pb-0 bg-white lg:flex 2xl:w-[1750px] lg:absolute lg:h-[550px] lg:top-[-150px] lg:gap-x-10 2xl:h-[850px]">
          <div className="overflow-hidden h-80 sm:h-[480px] order-2 lg:w-[480px] 2xl:w-[854px] lg:h-full">
            <img src={family} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex justify-center px-5 pt-10 lg:items-center 2xl:w-[854px]">
            <div className=" w-[440px] text-center lg:text-left lg:w-[400px] lg:pl-7 ">
              <p className="font-semibold text-xl pb-3 2xl:text-3xl">
                {t("about.descriptionHeader")}
              </p>
              <p className="pb-5">{t("about.descriptionFirstSub")}</p>
              <p>{t("about.descriptionSecondSub")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
