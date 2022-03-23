import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [professionalInfo, setProfessionalInfo] =
    useState({});
  const [specialties, setSpecialties] = useState(
    []
  );

  useEffect(() => {
    getProfessionalSpecialties();
    getProfessionalInfo();
  }, []);

  const getProfessionalSpecialties = () => {
    axios.get(`/api/specialties`).then((res) => {
      setSpecialties(res.data);
    });
  };

  const getProfessionalInfo = () => {
    axios
      .get(`/api/professionals`)
      .then((res) => {
        setProfessionalInfo(res.data);
      });
  };

  const providerData = {
    professionalInfo,
    specialties,
    getProfessionalInfo,
    getProfessionalSpecialties,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
