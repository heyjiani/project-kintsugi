import React from "react";

export default function Sidebar(props) {
  // need to populate checkboxes with prop data //

  // add onClick toggle show/hide to each category //

  return (
    <div className="sidebar">
      <header>
        <img
          src="https://cdn-icons.flaticon.com/png/512/1620/premium/1620735.png?token=exp=1648052951~hmac=bb1eab46446957048f5bc2f90ff6e8e6"
          alt=""
        />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp; Sort
      </header>
      <div className="sidebar__options">
        <div className="sidebar__options__category">
          <h4>City</h4>
        </div>
        <div>
          <input type="checkbox" />
          Item 1
        </div>
        <div>
          <input type="checkbox" />
          Item 2
        </div>
        <div>
          <input type="checkbox" />
          Item 3
        </div>
      </div>
    </div>
  );
}
