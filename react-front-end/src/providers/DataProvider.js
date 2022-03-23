import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [professionals, setProfessionals] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [professional, setProfessional] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [
    specialtiesForProfessional,
    setSpecialtiesForProfessional,
  ] = useState([]);

  useEffect(() => {
    getAllSpecialties();
    getAllProfessionals();
    getAllAppointments();
  }, []);

  const getAllSpecialties = () => {
    axios.get(`/api/specialties`).then((res) => {
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
    axios.get(`/api/appointments`).then((res) => {
      setAppointments(res.data);
    });
  };

  console.log("out", professionals);
  const [pro, setPro] = useState([]);
  // //fetch professional by id//
  const findProfessionalById = (id) => {
    console.log(id);
    console.log("pro", professionals);
    const h = professionals.filter(
      (item) => item.id === parseInt(id)
    );
    setPro([...h]);
    console.log(pro);
  };

  const getProfessionalById = (id) => {
    axios
      .get(`/api/professionals/${id}`)
      .then((res) => {
        setProfessional(res.data);
      });
  };

  const getSpecialtiesByProfessionalId = (id) => {
    axios
      .get(`/api/professionals/${id}/specialties`)
      .then((res) => {
        setSpecialtiesForProfessional(res.data);
      });
  };

  const providerData = {
    professional,
    professionals,
    specialties,
    specialtiesForProfessional,
    appointments,
    pro,
    getAllProfessionals,
    getAllSpecialties,
    getAllAppointments,
    getProfessionalById,
    getSpecialtiesByProfessionalId,
    findProfessionalById,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
