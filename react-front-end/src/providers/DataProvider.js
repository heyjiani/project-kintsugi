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
  const [specialtiesForProfessional, setSpecialtiesForProfessional] = useState([]);
  const [searchedProfessionals, setSearchedProfessionals] = useState([]);
  const [searchItem, setSearchItem] = useState({ Province: "", Language: "" });

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

  // // //fetch professional by id//
  // const findProfessionalById = (id) => {
  //   console.log("inside", id, professionals);
  //   const professional = professionals.filter(
  //     (item) => item.id === parseInt(id)
  //   );
  //   console.log(professional[0]);
  //   setProfessional(professional[0]);

  // };

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



  // const getProfessionalBySearch = (prov, lang) => {
  //   axios.get(`/api/professional/search?prov=${prov}&lang=${lang}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setSearchedProfessionals(res.data)
  //     })
  // }

  const getProfessionalBySearch = (prov, lang) => {
    axios.get(`/api/professionals/search/${prov}/${lang}`)
      .then((res) => {
        setSearchedProfessionals(res.data);
      })
  }

  const addSearchItem = (genre, item) => {
    setSearchItem((prev) => {
      return {
        ...prev,
        [genre]: item
      };
    });

  };

  const providerData = {
    professional,
    professionals,
    specialties,
    specialtiesForProfessional,
    appointments,
    searchedProfessionals,
    searchItem,
    getAllProfessionals,
    getAllSpecialties,
    getAllAppointments,
    getProfessionalById,
    getSpecialtiesByProfessionalId,
    getProfessionalBySearch,
    addSearchItem
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}
