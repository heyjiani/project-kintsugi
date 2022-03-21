import React from "react";

import ProfessionalListItem from "./ProfessionalListItem";

export default function ProfessionalList() {
  
  // rendering three repeats for now //
  return (
    <section className="professionals">
      <ul>
        <ProfessionalListItem />
        <ProfessionalListItem />
        <ProfessionalListItem />
      </ul>
    </section>
  )
}