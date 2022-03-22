import React, { useState, useEffect }from "react";
import axios from 'axios';

import ProfessionalListItem from "./ProfessionalListItem";

export default function ProfessionalList(props) {
  // rendering 4 repeats for now //
  const { professionals } = props;

  const parsedProfessionalData =
    Array.isArray(professionals) && professionals.map(p => {
      return <ProfessionalListItem key={p.id} {...p} />
    });

  return (
    <div className="professionals__container">
      <h2 className="display-info">Displaying professionals who speak Japanese in BC</h2>
      <ul className="professionals__list">
      { parsedProfessionalData }
      </ul>
    </div>
  );
}
