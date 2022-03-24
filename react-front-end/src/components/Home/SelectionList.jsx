import React, { useState } from "react";

export default function SelectionList(props) {
  const [active, setActive] = useState(null);
  const [searchItem, setSearchItem] =
    useState("");

  const handleToggle = (e, i) => {
    const value = e.target.dataset.txt;
    console.log("click", e.target.dataset.txt, i);
    setActive(i);
    setSearchItem(value);
    console.log(searchItem);
  };

  return (
    <div>
      {props.data.map((item, i) => {
        return (
          <li
            data-txt={item}
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
