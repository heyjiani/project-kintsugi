import React, { useContext, useState }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);

  // const [activeFilter, setActiveFilter] = useState;
  const [profData, setProfData] = useState([]);
  
  // --- work in progress!!--- //
  const handleCheckbox = (box_id, event) => {
    if (event.target.checked) {
      console.log('checked', box_id)

      let selected = professionals.filter(p => p.id === box_id)
      setProfData([...profData, ...selected]);
      console.log('profData', profData)

    } else {
      console.log('UNCHECKED', box_id)

      let unSelected = professionals.filter(p => p.id === box_id)
      setProfData(prev => [...prev])
      console.log('profData', profData)
    }

  }

  return (
    <div className="professionals">
      <Sidebar
        specialties={specialties}
        handleCheck={handleCheckbox}
      />
      <ProfessionalList
        professionals={professionals}
        specialties={specialties}
      />
    </div>
  );
}
