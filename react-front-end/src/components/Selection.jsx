import React from "react";
// import SelectionList from "./SelectionList";

export default function Selection(props) {
  //click and dropdown the list of genre//
  console.log(props.data);
  return (
    <>
      <div className="selection">
        {props.genre}
      </div>
    </>
  );
}
