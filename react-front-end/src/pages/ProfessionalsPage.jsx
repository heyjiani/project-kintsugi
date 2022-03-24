import React, { useContext, useEffect, useState }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);

  const [checkedValues, setCheckedValues] = useState([]);
  const [checkedProfs, setCheckedProfs] = useState([]);

  const newCheckedValues = [];

  // useEffect(() => {
  //   setCheckedValues()
  // }, [checkedValues]);
  // --- work in progress!!--- //
  const handleCheck = (event) => {

    if (event.target.checked) {
      console.log('checked', event.target.value);
      newCheckedValues.push(event.target.value);
      setCheckedValues(prev => [...prev, ...newCheckedValues]);
      console.log(checkedValues)

      const newProfData = professionals.filter(p => p.specialties.includes(event.target.value));
      setCheckedProfs([...newProfData]);
      console.log('profData', checkedProfs)

    } else {
      console.log('UNCHECKED', event.target.value)
      const newCheckedValues = checkedValues.slice(0, -1);
      setCheckedValues(newCheckedValues);
    }
  }

  return (
    <div className="professionals">
      <Sidebar
        specialties={specialties}
        handleCheck={handleCheck}
      />
      <ProfessionalList
        professionals={checkedValues.length ? checkedProfs : professionals}
        specialties={specialties}
      />
    </div>
  );
}
