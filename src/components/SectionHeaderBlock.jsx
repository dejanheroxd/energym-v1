function SectionHeaderBlock({ header, description }) {
  return (
    <div className="bg-gymblue text-white text-center py-9 px-6">
      <p className="font-semibold text-2xl pb-4">{header}</p>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeaderBlock;
