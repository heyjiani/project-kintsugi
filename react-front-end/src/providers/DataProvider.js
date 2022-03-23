import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [professionals, setProfessionals] =
    useState({});
  const [specialties, setSpecialties] = useState(
    []
  );

  useEffect(() => {
    getProfessionalSpecialties();
    getAllProfessionals();
  }, []);

  const getProfessionalSpecialties = () => {
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

  const providerData = {
    professionals,
    specialties,
    getAllProfessionals,
    getProfessionalSpecialties,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
