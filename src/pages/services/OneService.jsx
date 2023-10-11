function OneService(props) {
  const { oneClassName, classImage, hour, price } = props.data;

  return (
    <div className="flex justify-center pt-8">
      <div className="w-[320px] border border-black flex flex-col items-center">
        <div>
          <img src={classImage} alt="" />
        </div>
        <div className="w-64 py-6">
          <p className="font-semibold text-lg">{oneClassName}</p>
          <p className="py-4">
            Join our strength training sessions and reach new heights in
            fitness. Discover the power within you!
          </p>
          <a href="" className="underline">
            Read More
          </a>
          <div>
            <span className="h-[1px] bg-gray-400 w-60 block"></span>
          </div>
          <div className="flex">
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
          </div>
          <p>{hour}</p>
          <p className="pb-4">${price}</p>
          <button className="w-full py-2 duration-500 text-white rounded-full bg-gymrose">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneService;
