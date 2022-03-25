import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";
import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {
  let { prov, lang } = useParams()
  const { getProfessionalBySearch, searchedProfessionals, specialties, handleCheck, checkedValues, getFilteredProf } = useContext(DataContext);

  useEffect(() => {
    getProfessionalBySearch(prov, lang);
  }, []);


  return (
    <div className="professionals">
      <Sidebar
        specialties={specialties}
        handleCheck={handleCheck}
      />
      <ProfessionalList

        professionals={checkedValues.length ? getFilteredProf(searchedProfessionals, checkedValues) : searchedProfessionals}
        specialties={specialties}
      />
    </div>
  );
}
