import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    professionals: [],
    specialties: [],
    appointments: []
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/professionals"),
      axios.get("/api/appointments"),
      axios.get("/api/specialties")
    ]).then(all => {
      setState(prev => ({
        ...prev,
        professionals: all[0].data,
        appointments: all[1].data,
        specialties: all[2].data
      }))
    })
  }, []);
  

  // const findProfessionalById = (id) => {
  //   return state.professionals.filter(p => p.id === id);
  // };

  // return {
  //   state,
  //   findProfessionalById
  // };

};