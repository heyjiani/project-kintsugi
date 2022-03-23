import React from "react";
import Button from "./Button";
import Selection from "./Selection";
import { provinceData } from "../searchData";

export default function HomeHeader() {
  console.log(provinceData);
  return (
    <div>
      <div className="heading">
        <h2>
          Find a mental health professional that
          meets your needs.
        </h2>
        <p>
          Start by selecting a language and a
          location.
        </p>
      </div>
      <Selection genre="Language" />
      <Selection
        genre="Province"
        data={provinceData}
      />
      <Button text="Search" />
    </div>
  );
}
