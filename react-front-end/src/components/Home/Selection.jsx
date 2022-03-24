import React, { useState } from "react";
// import SelectionList from "./SelectionList";

export default function Selection({
  genre,
  data,
}) {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  //click and dropdown the list of genre//
  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  //click and dropdown the list of genre//
  const handleShow = () => {
    setShow(!show);
  };

  const parsedSelectionData = data.map(
    (item, i) => {
      return (
        <li
          onClick={handleToggle}
          // className={toggle ? }
          key={i}
        >
          {item}
        </li>
      );
    }
  );

  return (
    <div className="selection">
      <div onClick={handleToggle}>{genre}</div>
      {show && <ul>{parsedSelectionData}</ul>}
    </div>
  );
}
