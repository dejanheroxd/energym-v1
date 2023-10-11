import womanMatt from "../../assets/women-mat-min.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ClassesSection() {
  return (
    <div className="border-none bg-gymblue flex justify-center text-center pb-9">
      <div className="w-72 pt-10">
        <p className="text-white font-semibold text-xl mb-4">Class Schedule</p>
        <p className="text-white mb-7">
          {`Explore our diverse class schedule and find the perfect fitness
          classes to suit your goals and preferences. From high-energy cardio to
          mindful yoga, we've got you covered.`}
        </p>
        <LazyLoadImage
          loading="lazy"
          className="h-64 w-full"
          src={womanMatt}
          alt=""
        />
        <button className="mt-9 text-black text-sm px-10 py-4 rounded-full bg-white">
          View All
        </button>
      </div>
    </div>
  );
}

export default ClassesSection;
