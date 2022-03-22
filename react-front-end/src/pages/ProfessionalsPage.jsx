import React, { useState, useEffect }from "react";
import axios from 'axios';

import ProfessionalList from "../components/Professionals/ProfessionalList";
import Sidebar from "../components/Professionals/Sidebar";

export default function ProfessionalsPage() {

  const [state, setState] = useState({
    professionals: {}
  })

  useEffect(() => {
    axios
      .get("/api/professionals")
      .then(prof => {
        setState(() => ({professionals: prof.data}))
      })
  }, []);

  return (
    <div className="professionals">
      <Sidebar />
      <ProfessionalList professionals={state.professionals} />
    </div>
  );
}
