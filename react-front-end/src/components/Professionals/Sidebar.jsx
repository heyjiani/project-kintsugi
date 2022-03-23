import React from "react";

export default function Sidebar(props) {
  // need to populate checkboxes with prop data //

  // add onClick toggle show/hide to each category //

  return (
    <div className="sidebar">
      <header>Sort</header>
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
