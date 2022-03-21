import React from "react";

import ProfessionalList from "../components/ProfessionalList";
import Sidebar from "../components/Sidebar";

export default function ProfessionalsPage() {
  return(
    <section>
      <Sidebar />
      <ProfessionalList />
    </section>
  )
}
