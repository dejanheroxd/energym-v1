import womanMatt from "../../assets/women-mat-min.jpg";

function ClassesSection() {
  return (
    <div className="border-none bg-gympurple flex justify-center text-center pb-9">
      <div className="w-72 pt-10">
        <p className="text-white font-semibold text-xl mb-4">Class Schedule</p>
        <p className="text-white mb-7">
          {`Explore our diverse class schedule and find the perfect fitness
          classes to suit your goals and preferences. From high-energy cardio to
          mindful yoga, we've got you covered.`}
        </p>
        <img src={womanMatt} alt="" />
        <button className="mt-9 text-black text-sm px-10 py-4 rounded-full bg-white">
          View All
        </button>
      </div>
    </div>
  );
}

export default ClassesSection;
