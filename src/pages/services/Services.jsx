import { useState } from "react";
import OneService from "./OneService";
import { CLASSES } from "../../classes";
import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import program from "../../assets/program1.jpg";

function Services() {
  const [t] = useTranslation("global");

  const [selects, setSelects] = useState("ACTIONFIT");
  const [isOpen, setIsOpen] = useState(false);

  function openPopUp() {
    setIsOpen(true);
  }

  function closePopUp() {
    setIsOpen(false);
  }

  function onSelect(service) {
    setSelects(service);
  }

  return (
    <>
      {isOpen && (
        <div className="bg-black/60 fixed inset-0 z-[100] flex justify-center items-center">
          <div className="bg-white relative w-[320px] h-[300px] lg:w-[870px] lg:h-[650px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div
              onClick={() => closePopUp()}
              className="absolute hover:cursor-pointer text-white lg:bg-slate-950/90 w-8 h-8 rounded-full flex justify-center items-center right-[0px] top-[0px] z-[100] lg:z-[10] bg-transparent lg:right-[-40px] lg:top-[-40px]"
            >
              <p>X</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden absolute w-[320px] h-[300px] lg:w-[870px] lg:h-[650px]  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="object-fill h-full w-full" src={program} alt="" />
          </div>
        </div>
      )}
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
            <option className="hover:cursor-pointer">ACTIONFIT</option>
            <option>YOGALATES</option>
            <option>CROSS TRAINING</option>
            <option>POWERBAND</option>
          </select>
        </div>
        <div className="hidden text-white 2xl:flex 2xl:justify-center 2xl:pt-20">
          <div className="hidden 2xl:flex 2xl:hover:cursor-pointer">
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="ACTIONFIT"
              className={`${
                selects === "ACTIONFIT"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              ACTIONFIT
            </button>
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="YOGALATES"
              className={`${
                selects === "YOGALATES"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              YOGALATES
            </button>
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="CROSS TRAINING"
              className={`${
                selects === "CROSS TRAINING"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              CROSS TRAINING
            </button>
            <button
              aria-label="Button"
              onClick={(e) => onSelect(e.target.value)}
              value="POWERBAND"
              className={`${
                selects === "POWERBAND"
                  ? "2xl:border-b-[3px] 2xl:border-gymGreen"
                  : ""
              } 2xl:border-b 2xl:border-gray-300 2xl:w-[299px] 2xl:pb-3 2xl:text-center`}
            >
              POWERBAND
            </button>
          </div>
        </div>
        <div>
          {CLASSES.map((oneClass) =>
            oneClass.oneClassName === selects ? (
              <OneService
                openPopUp={openPopUp}
                data={oneClass}
                key={oneClass.id}
              />
            ) : null
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Services;
