import { useState } from "react";
import OneService from "./OneService";
import { CLASSES } from "../../classes";
import SectionHeaderBlock from "../../components/SectionHeaderBlock";

function Services() {
  const [selects, setSelects] = useState("Cardio Class");

  return (
    <>
      <div>
        <SectionHeaderBlock
          header={"Our Services"}
          description={
            "Welcome to a world of fitness and well-being. Explore our diverse range of classes, tailored to meet your unique fitness goals. Whether you're looking to build muscle, enhance your cardiovascular health, or discover the exhilarating world of powerlifting, we've got you covered. Our expert trainers and state-of-the-art facilities are here to empower you on your fitness journey!"
          }
        />
      </div>
      <div className="flex justify-center pt-6">
        <select
          value={selects}
          onChange={(e) => setSelects(e.target.value)}
          className="bg-white border hover:cursor-pointer open:border-none border-gray-400 w-80 h-12 pl-3"
        >
          <option className="hover:cursor-pointer">Cardio Class</option>
          <option>Muscle Building</option>
          <option>Powerlifting</option>
        </select>
      </div>
      <div>
        {CLASSES.map((oneClass) =>
          oneClass.oneClassName === selects ? (
            <OneService data={oneClass} key={oneClass.id} />
          ) : null
        )}
      </div>
    </>
  );
}

export default Services;
