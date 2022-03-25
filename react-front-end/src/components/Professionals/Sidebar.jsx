import React from "react";

export default function Sidebar(props) {

  const { specialties, handleCheck, professions, cities } = props;

  const parsedSpecialties = specialties.map(s => {
    return (
      <div key={s.id}>
        <input type="checkbox" value={s.id} onClick={e => handleCheck(e)} />
        {s.name}
      </div>
    )
  })
  console.log('PROF', professions)

  const parsedProfessions = professions.map((p, i) => {
    return (
      <div key={i}>
        <input type="checkbox" value={p} onClick={e => handleCheck(e)} />
        {p}
      </div>
    )
  });

  const parsedCities = cities.map((c, i) => {
    return (
      <div key={i}>
        <input type="checkbox" value={c} onClick={e => handleCheck(e)} />
        {c}
      </div>
    )
  });

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
        {parsedCities}
      <div className="sidebar__options__category">
        <h4>Profession</h4>
      </div>
        {parsedProfessions}
        <div className="sidebar__options__category">
          <h4>Issues</h4>
        </div>
        {parsedSpecialties}
      </div>
    </div>
  );
}
