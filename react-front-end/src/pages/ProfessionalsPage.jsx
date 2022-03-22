import React from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

export default function ProfessionalsPage() {
  return (
    <div className="professionals">
      <h2>Displaying professionals who speak Japanese in BC</h2>
      <Sidebar />
      <ProfessionalList />
    </div>
  );
}
