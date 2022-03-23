import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [professionals, setProfessionals] =
    useState([]);
  const [specialties, setSpecialties] = useState(
    []
  );
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    getSpecialties();
    getProfessionals();
    getAppointments();
  }, []);

  const getSpecialties = () => {
    axios.get(`/api/specialties`).then((res) => {
      setSpecialties(res.data);
    });
  };

  const getProfessionals = () => {
    axios
      .get(`/api/professionals`)
      .then((res) => {
        setProfessionals(res.data);
      });
  };

  const getAppointments = () => {
    axios.get(`/api/appointments`).then((res) => {
      setAppointments(res.data);
    });
  };

  const providerData = {
    professionals,
    specialties,
    appointments,
    getProfessionals,
    getSpecialties,
    getAppointments,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
