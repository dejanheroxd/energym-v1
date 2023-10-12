function SectionHeaderBlock({ header, description, overflow }) {
  return (
    <div
      className={`bg-gymblue text-white flex justify-center py-9 px-6 ${
        overflow ? "lg:pb-60 lg:pt-32" : ""
      }`}
    >
      <div className="w-96 lg:w-[650px] 2xl:flex 2xl:justify-center text-center 2xl:w-[800px]">
        <div className="flex justify-center flex-col 2xl:w-[1000px]">
          <p className="font-semibold text-2xl pb-4 lg:text-5xl 2xl:w-[1000px] 2xl:text-6xl">
            {header}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeaderBlock;
