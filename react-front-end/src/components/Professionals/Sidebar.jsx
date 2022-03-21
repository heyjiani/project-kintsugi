import React from "react";

import "../../scss/Sidebar.scss"

export default function Sidebar() {
  return (
    <aside className="professionals__sidebar">
      <header>Sort</header>
      <div>
        <h4>City</h4>
        <input type="checkbox" />Item 1
        <input type="checkbox" />Item 2
        <input type="checkbox" />Item 3
      </div>
    </aside>
  )
}