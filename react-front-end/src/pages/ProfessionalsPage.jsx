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
        console.log(prof.data)
        setState(() => ({professionals: prof.data}))
      })
  }, []);

  const professionals = state.professionals;

  return (
    <div className="professionals">
      <Sidebar />
      <ProfessionalList {...professionals} />
    </div>
  );
}
