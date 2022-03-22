import React from "react";

export default function ProfessionalListItem(props) {
  const {first_name, last_name, city, province, profession, icon_url, language_1} = props;
  const professionalClass = "professionals__item";

  return (
    <li className={professionalClass}>
      <header>
        <h2>{first_name} {last_name}</h2>
      </header>
      <div>
        <img
          className="professionals__item__image"
          src={icon_url}
          alt={first_name}
        />
        <ul>
          <li>{profession}</li>
          <li>{language_1}</li>
          <li>{city}, {province}</li>
        </ul>
      </div>
      <footer>
        <button>Find out more</button>
      </footer>
    </li>
  );
}
