import React from 'react';
import { useParams } from 'react-router-dom';

import ProfessionalListItem from './ProfessionalListItem';

export default function ProfessionalList(props) {
  const { professionals, specialties } = props;
  const { prov, lang } = useParams();

  const parsedProfessionalData =
    Array.isArray(professionals) &&
    professionals.map((p) => {
      const specs = specialties.filter((s) => s.professionals.includes(p.id)).map((s) => s.name);

      return <ProfessionalListItem key={p.id} {...p} specialties={specs} />;
    });

  return (
    <div className="professionals__container">
      <h2 className="display-info">
        Displaying professionals who speak&nbsp;<span>{lang} </span>in&nbsp;<span>{prov}</span>
      </h2>
      <ul className="professionals__list">{parsedProfessionalData}</ul>
    </div>
  );
}
