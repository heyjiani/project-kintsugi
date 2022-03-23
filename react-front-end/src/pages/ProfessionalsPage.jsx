import React, { useContext }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionals } = useContext(DataContext);
  const { specialties } = useContext(DataContext);
  

  return (
    <div className="professionals">
      <Sidebar specialties={specialties}/>
      <ProfessionalList professionals={professionals} />
    </div>
  );
}
