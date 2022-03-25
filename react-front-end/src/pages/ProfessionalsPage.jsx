import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";
import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {
  let { prov, lang } = useParams()
  const { getProfessionalBySearch, searchedProfessionals, professionals, specialties } = useContext(DataContext);

  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    getProfessionalBySearch(prov, lang);

  }, []);


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

        professionals={checkedValues.length ? getFilteredProf(checkedValues) : searchedProfessionals}
        specialties={specialties}
      />
    </div>
  );
}
