import React from "react";
import { AiOutlineTag } from 'react-icons/ai'

export default function Sidebar(props) {

  const { specialties, handleCheck, professions, cities, handleRadio } = props;

  const parsedSpecialties = specialties.map(s => {
    return (
      <div key={s.id}>
        <input type="checkbox" value={s.id} onClick={e => handleCheck(e)} />
        {s.name}
      </div>
    )
  });

  const parsedProfessions = professions.map((p, i) => {
    return (
      <div key={i}>
        <input type="radio" name="profession" value={p} onClick={e => handleRadio(e, 'profession', p)} />
        {p}
      </div>
    )
  });

  const parsedCities = cities.map((c, i) => {
    return (
      <div key={i}>
        <input type="radio" name="city" value={c} onClick={e => handleRadio(e, 'city', c)} />
        {c}
      </div>
    )
  });

  return (
    <div className="sidebar">
      <header><span>
      <AiOutlineTag /></span>{" "}
         Sort
      </header>
      <div className="sidebar__options">

        <div className="sidebar__options__category">
          <h4>Issues</h4>
        </div>
        {parsedSpecialties}

        <div className="sidebar__options__category">
          <h4>City</h4>
        </div>
        {parsedCities}

        <div className="sidebar__options__category">
          <h4>Profession</h4>
        </div>
        {parsedProfessions}
      </div>
    </div>
  );
}
