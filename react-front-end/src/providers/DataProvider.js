import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [professionals, setProfessionals] = useState({});
  const [specialties, setSpecialties] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllSpecialties();
    getAllProfessionals();
  }, []);

  const getAllSpecialties = () => {
    axios
      .get(`/api/specialties`)
      .then((res) => {
        setSpecialties(res.data);
      });
  };

  const getAllProfessionals = () => {
    axios
      .get(`/api/professionals`)
      .then((res) => {
        setProfessionals(res.data);
      });
  };

  const getAllAppointments = () => {
    axios
      .get(`/api/appointments`)
      .then((res) => {
        setAppointments(res.data)
      })
  }

  // const getSpecialtiesByProfessionalId = id => {
  //   axios
  //     .get(`/api/professionals/${id}/specialties`)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  // };

  const providerData = {
    professionals,
    specialties,
    appointments,
    getAllProfessionals,
    getAllSpecialties,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
