import React from "react";

export default function Sidebar() {
  return (
    <aside className="professionals__sidebar">
      <header>Sort</header>
      <div>
        City
        <input type="checkbox" />Item 1
        <input type="checkbox" />Item 2
        <input type="checkbox" />Item 3
      </div>
    </aside>
  )
}