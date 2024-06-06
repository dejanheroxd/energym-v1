import { useState } from "react";
import OneService from "./OneService";
import { CLASSES } from "../../classes";
import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Services() {
  const [t] = useTranslation("global");

  const [selects, setSelects] = useState("Cardio Class");

  console.log(selects);

  function onSelect(service) {
    setSelects(service);
  }

  return (
    <>
      <div>
        <SectionHeaderBlock
          header={t("services.heroHeader")}
          description={t("services.heroSubHeader")}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center pt-6 2xl:pt-9 2xl:hidden">
          <select
            value={selects}
            onChange={(e) => setSelects(e.target.value)}
            className="bg-white border hover:cursor-pointer open:border-none border-gray-400 w-80 h-12 pl-3 2xl:hidden"
          >
            <option className="hover:cursor-pointer">Cardio Class</option>
            <option>Muscle Building</option>
            <option>Powerlifting</option>
          </select>
        </div>
        <div className="hidden text-white 2xl:flex 2xl:justify-center 2xl:pt-20">
          <div className="hidden 2xl:flex 2xl:hover:cursor-pointer">
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="Cardio Class"
              className={`${
                selects === "Cardio Class"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              Cardio Class
            </button>
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="Muscle Building"
              className={`${
                selects === "Muscle Building"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              Muscle Building
            </button>
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="Powerlifting"
              className={`${
                selects === "Powerlifting"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              Powerlifting
            </button>
          </div>
        </div>
        <div>
          {CLASSES.map((oneClass) =>
            oneClass.oneClassName === selects ? (
              <OneService data={oneClass} key={oneClass.id} />
            ) : null
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Services;
