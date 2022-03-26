import React from "react";
import { AiOutlineTag } from 'react-icons/ai'

export default function Sidebar(props) {
  // need to populate checkboxes with prop data //
  const { specialties, handleCheck } = props;
  // ----- work in progress! ----- //

  const parsedSpecialties = specialties.map(s => {
    return (
      <div key={s.id}>
        <input type="checkbox" value={s.id} onClick={e => handleCheck(e)} />
        {s.name}
      </div>
    )
  })
  // add onClick toggle show/hide to each category //

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
      </div>
    </div>
  );
}
