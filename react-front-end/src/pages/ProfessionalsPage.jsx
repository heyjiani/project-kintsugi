import React from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

export default function ProfessionalsPage() {
  return (
    <div className="professionals">
      <p>Displaying professionals who speak Japanese in BC</p>
      <Sidebar />
      <ProfessionalList />
    </div>
  );
}
