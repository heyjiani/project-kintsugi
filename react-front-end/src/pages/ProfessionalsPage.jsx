import React from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

export default function ProfessionalsPage() {
  return(
    <div className="professionals">
      <Sidebar />
      <ProfessionalList />
    </div>
  )
}
