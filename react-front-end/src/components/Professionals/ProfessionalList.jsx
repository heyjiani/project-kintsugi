import React from "react";

import ProfessionalListItem from "./ProfessionalListItem";

export default function ProfessionalList(props) {
  const { professionals, specialties } = props;

  const parsedProfessionalData =
    Array.isArray(professionals) &&
    professionals.map((p) => {
      return (
          <ProfessionalListItem
            key={p.id}
            {...p}
            specialties={specialties}
          />
      );
    });

  return (
    <div className="professionals__container">
      <h2 className="display-info">
        Displaying professionals who speak
        Japanese in BC
      </h2>
      <ul className="professionals__list">
        {parsedProfessionalData}
      </ul>
    </div>
  );
}
