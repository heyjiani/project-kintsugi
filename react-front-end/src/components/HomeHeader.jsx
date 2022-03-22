import React from "react";
import Button from "./Button";
import Selection from "./Selection";

export default function HomeHeader() {
  return (
    <div>
      <div className="heading">
        <h2>
          Find a mental health professional that meets
          your needs.
        </h2>
        <p>
          Start by selecting a language and a
          location.
        </p>
      </div>
      <Selection genre="Language" />
      <Selection genre="Province" />
      <Button text="Search" />
    </div>
  );
}
