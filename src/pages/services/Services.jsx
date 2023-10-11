import { useState } from "react";
import OneService from "./OneService";
import { CLASSES } from "../../classes";

function Services() {
  const [selects, setSelects] = useState("cardio");

  return (
    <>
      <div className="flex justify-center">
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
