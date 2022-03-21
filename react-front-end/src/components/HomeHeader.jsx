import React from "react";
import Button from "./Button";
import Selection from "./Selection";

export default function HomeHeader() {
  return (
    <div>
      <div className="heading">
        <h2>
          Find a mental health professional meets
          your needs.
        </h2>
        <p>
          start by selecting language and
          location.
        </p>
      </div>
      <Selection genre="Language" />
      <Selection genre="Province" />
      <Button text="Search" />
    </div>
  );
}
