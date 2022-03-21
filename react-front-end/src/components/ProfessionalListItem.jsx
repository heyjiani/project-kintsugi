import React from "react"

import "../scss/ProfessionalListItem.scss"

export default function ProfessionalListItem(props) {
  // const { first_name, last_name, city, province, profession, icon_url } = props;
  const professionalClass = "professionals__item"

  return (
    <li className={professionalClass}>
      <header>
        <h2>Yumi Tanaka</h2>
      </header>
      <div>
        <img
          className="professionals__item-image"
          src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
          alt=""
        />
        <ul>
          <li>Therapist</li>
          <li>Family Conflict</li>
          <li>Campbell River, BC</li>
        </ul>
      </div>
      <footer>
        <button>Find out more</button>
      </footer>
    </li>
  )
}