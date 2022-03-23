import React, { useContext, useState }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);

  // const [activeFilter, setActiveFilter] = useState;
  const [profData, setProfData] = useState([]);
  
  const handleCheckbox = (value, event) => {
    if (event.target.checked) {
      console.log('checked', value)

      // let selected = professionals.filter(p => p.id === )

    } else {
      console.log('UNCHECKED', value)
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
