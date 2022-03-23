import React, { useContext }from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

import { DataContext } from "../providers/DataProvider";

export default function ProfessionalsPage() {

  const { professionalInfo } = useContext(DataContext);
  // console.log(professionalInfo);

  return (
    <div className="professionals">
      <Sidebar />
      <ProfessionalList professionals={professionalInfo} />
    </div>
  );
}
