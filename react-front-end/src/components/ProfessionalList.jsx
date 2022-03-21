import React from "react";

import ProfessionalListItem from "./ProfessionalListItem";

import "../scss/ProfessionalList.scss";

export default function ProfessionalList() {
  
  // rendering 4 repeats for now //

  return (
    <section className="professionals">
      <ul className="professionals__list">
        <ProfessionalListItem />
        <ProfessionalListItem />
        <ProfessionalListItem />
        <ProfessionalListItem />
      </ul>
    </section>
  )
}