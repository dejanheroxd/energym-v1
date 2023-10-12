function OneService(props) {
  const { oneClassName, classImage, hour, price, description } = props.data;

  return (
    <div className="flex justify-center pt-8 pb-8">
      <div className="w-[320px] border border-black flex flex-col items-center">
        <div className="overflow-hidden h-52 w-full">
          <img src={classImage} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="w-64 py-6">
          <p className="font-semibold text-lg">{oneClassName}</p>
          <p className="py-4">{description}</p>
          <a href="" className="underline">
            Read More
          </a>
          <div className="pt-4 pb-4">
            <span className="h-[1px] bg-gray-400 w-60 block"></span>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-[6px]">
              <p>Mon, </p>
              <p>Tue, </p>
              <p>Wed, </p>
              <p>Thu, </p>
              <p>Fri, </p>
            </div>
            <p>{hour} hr</p>
            <p className="pb-4">${price}</p>
          </div>
          <button className="w-full py-2 duration-500 text-white rounded-full bg-gymrose">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneService;
