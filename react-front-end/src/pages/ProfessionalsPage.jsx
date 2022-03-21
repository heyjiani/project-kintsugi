import React from "react";

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

export default function ProfessionalsPage() {
  return(
    <section>
      <Sidebar />
      <ProfessionalList />
    </section>
  )
}
