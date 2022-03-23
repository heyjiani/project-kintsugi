import React, { useState } from "react";
import SelectionList from "./SelectionList";
// import SelectionList from "./SelectionList";

export default function Selection({
  genre,
  data,
}) {
  const [show, setShow] = useState(false);

  //click and dropdown the list of genre//
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="selection">
      <div
        className="selection__heading"
        onClick={handleShow}
      >
        {genre}
      </div>
      {show && (
        <ul>
          <SelectionList data={data} />
        </ul>
      )}
    </div>
  );
}
