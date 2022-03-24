import React, { useContext, useState } from "react";
import { DataContext } from "../../providers/DataProvider";

export default function SelectionList(props) {
  const [active, setActive] = useState(null);
  const { addSearchItem, searchItem } = useContext(DataContext);

  const handleToggle = (e, i) => {
    const { genre, item } = e.target.dataset;
    console.log("click", genre, item);
    setActive(i);
    addSearchItem(genre, item)
    console.log(searchItem);
  };

  return (
    <div >
      {props.data.map((item, i) => {
        return (
          <li
            data-genre={props.genre}
            data-item={item}
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
