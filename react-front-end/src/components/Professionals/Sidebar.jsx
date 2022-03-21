import React from "react";

export default function Sidebar() {
  // need to populate checkboxes with prop data //

  // add onClick toggle show/hide to each category //

  return (
    <aside className="professionals__sidebar">
      <header>Sort</header>
      <div className="professionals__sidebar__options">
        <h4>City</h4>
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
    </aside>
  );
}
