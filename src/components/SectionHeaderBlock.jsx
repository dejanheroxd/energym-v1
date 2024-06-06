import { motion } from "framer-motion";

function SectionHeaderBlock({ header, description, overflow }) {
  return (
    <div
      className={`bg-gymGreen text-white flex justify-center py-9 xl:py-32 px-6 ${
        overflow ? "lg:pb-60 xl:pb-60" : ""
      }`}
    >
      <div className="w-96 lg:w-[650px] 2xl:flex 2xl:justify-center text-center 2xl:w-[800px]">
        <div className="flex justify-center 2xl:items-center flex-col 2xl:w-[1000px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="font-semibold text-2xl pb-4 lg:text-5xl 2xl:w-[1000px] 2xl:text-6xl"
          >
            {header}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
            className="2xl:w-[600px]"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeaderBlock;
