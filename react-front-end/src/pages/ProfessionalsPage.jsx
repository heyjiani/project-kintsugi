import React, { useContext, useState }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);

  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheck = (event) => {
    if (event.target.checked) {
      setCheckedValues(prev => [...prev, event.target.value]);
    } else {
      const newCheckedValues = checkedValues.filter(c => c !== event.target.value)
      setCheckedValues(newCheckedValues);
    }
  }


  const getFilteredProf = specs => {
    return professionals.filter(p => specs.every(id => p.specialties.includes(parseInt(id))));
  }

  return (
    <div className="professionals">
      <Sidebar
        specialties={specialties}
        handleCheck={handleCheck}
      />
      <ProfessionalList
        professionals={checkedValues.length ? getFilteredProf(checkedValues) : professionals}
        specialties={specialties}
      />
    </div>
  );
}
