function MembershipOption({ rarity, price, duration, bgCl, borderCl, txtCl }) {
  return (
    <div className="flex flex-col px-5 pt-10">
      <div className="border h-80 px-8 py-8 text-center flex flex-col border-black">
        <p className="font-semibold text-xl">{rarity}</p>
        <div className="flex justify-center pt-3 pb-5">
          <div className="relative flex items-center justify-center h-20 w-32">
            <p className="font-semibold absolute top-0 left-0">$</p>
            <p className="font-semibold text-6xl">{price}</p>
          </div>
        </div>
        <p className="text-sm pb-4">{duration}</p>
        <button
          className={`py-3 border text-${txtCl} border-${borderCl} bg-${bgCl}`}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default MembershipOption;
