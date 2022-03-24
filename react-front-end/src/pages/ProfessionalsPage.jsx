import React, { useContext, useState }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);

  const [checkedValues, setCheckedValues] = useState([]);

  // console.log(checkedValues)
  // --- work in progress!!--- //
  const handleCheckbox = (box_id, event) => {

    if (event.target.checked ) {
      console.log('checked', box_id)
      const newCheckedValues = professionals.filter(p => specialties[box_id].professionals.includes(p.id));
      setCheckedValues(prev => [...newCheckedValues]);
      // console.log('profData', profData)
      // console.log('disorder is', specialties[box_id])

    } else {
      console.log('UNCHECKED', box_id)
      const newCheckedValues = professionals.filter(p => specialties[box_id].professionals.includes(p.id));
      setCheckedValues(prev => [...newCheckedValues]);
      // setCheckedValues(prev => [...prev])
      // let unSelected = professionals.filter(p => p.id === box_id)
      // setProfData(prev => [...prev])
      // console.log('profData', profData)
    }
  }

  return (
    <div className="professionals">
      <Sidebar
        specialties={specialties}
        handleCheck={handleCheckbox}
      />
      <ProfessionalList
        professionals={checkedValues.length ? checkedValues : professionals}
        specialties={specialties}
      />
    </div>
  );
}
