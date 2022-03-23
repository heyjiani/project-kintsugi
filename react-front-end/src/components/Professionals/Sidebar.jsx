import React from "react";

export default function Sidebar(props) {
  // need to populate checkboxes with prop data //
  const { specialties, handleCheck } = props;
  // ----- work in progress! ----- //

  const parsedSpecialties = specialties.map(s => {
    return (
      <div key={s.id}>
        <input type="checkbox" value={s.name} onChange={e => handleCheck(s.id, e)} />
        {s.name}
      </div>
    )
  })
  // add onClick toggle show/hide to each category //

  return (
    <div className="sidebar">
      <header><img src="https://cdn-icons.flaticon.com/png/512/1620/premium/1620735.png?token=exp=1648052951~hmac=bb1eab46446957048f5bc2f90ff6e8e6" /> &nbsp;&nbsp;&nbsp;&nbsp; Sort</header>
      <div className="sidebar__options">
        <div className="sidebar__options__category">
          <h4>Issues</h4>
        </div>
        {parsedSpecialties}
      </div>
    </div>
  );
}
