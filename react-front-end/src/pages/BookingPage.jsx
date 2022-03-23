import React, {
  useContext,
  useEffect,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "../components/BookingForm";

import ProfessionalDetail from "../components/ProfessionalDetail";
import useApplicationData from "../hooks/useApplicationData";
import { DataContext } from "../providers/DataProvider";

export default function BookingPage() {
  let { id } = useParams();

  const {
    professionals,
    specialties,
    appointments,
    getProfessionals,
    getSpecialties,
    getAppointments,
  } = useContext(DataContext);

  console.log(specialties);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   getProfessionalInfo;
  //   getProfessionalSpecialties;
  // }, []);

  // const getProfessionalInfo = () => {
  //   axios
  //     .get(`/api/professionals/${id}`)
  //     .then((res) => {
  //       setProfessionalInfo(res.data);
  //     });
  // };

  // const getProfessionalSpecialties = () => {
  //   axios
  //     .get(`/api/specialties/${id}`)
  //     .then((res) => {
  //       setSpecialties(res.data);
  //     });
  // };

  return (
    <div>hi</div>
    // <div className="components_container">
    //   <ProfessionalDetail
    //     professional={professionalInfo}
    //     specialties={specialties}
    //   />
    //   <BookingForm
    //     // professional={professionalInfo}
    //     // specialties={specialties}
    //   />
    // </div>
  );
}
