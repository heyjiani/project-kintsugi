import React, { useState } from "react";

export default function SelectionList(props) {
  const [active, setActive] = useState(null);

  const handleToggle = (e, i) => {
    console.log("click", e.target, i);
    setActive(i);
  };

  return (
    <div>
      {props.data.map((item, i) => {
        return (
          <li
            key={i}
            onClick={(e) => {
              handleToggle(e, i);
            }}
            className={
              active === i ? "select__list" : ""
            }
          >
            {item}
          </li>
        );
      })}
    </div>
  );
}
