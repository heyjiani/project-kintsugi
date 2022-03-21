import React from "react";

import ProfessionalListItem from "./ProfessionalListItem";

import "../scss/ProfessionalList.scss";

export default function ProfessionalList() {
  
  // rendering three repeats for now //
  return (
    <section className="professionals">
      <ul className="professionals__list">
        <ProfessionalListItem />
        <ProfessionalListItem />
        <ProfessionalListItem />
      </ul>
    </section>
  )
}