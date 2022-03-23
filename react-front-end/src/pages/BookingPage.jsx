import React, {
  useContext,
  useEffect,
  useState,
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
    professional,
    professionals,
    specialties,
    getProfessionalById,
  } = useContext(DataContext);

  useEffect(() => {
    getProfessionalById(id);
  }, []);
  console.log(professional);
  // const [professional, setProfessional] =
  //   useState([]);

  // console.log(professionals);

  // const findProfessionalById = (id) => {
  //   professionals.filter(
  //     (item) => item.id === parseInt(id)
  //   );
  // };

  // console.log(findProfessionalById(id));

  // const [show, setShow] = useState(false);

  //fetch professional by id//

  // const getSingleAppointment = (id) => {
  //   const array = findProfessionalById(id);
  //   console.log("array", array, id);
  //   setProfessional([...array]);
  // };

  // const findProfessionalById = (id) => {
  //   console.log(professionals);
  //   const h = professionals.filter(
  //     (item) => item.id === parseInt(id)
  //   );
  //   setProfessional([...h]);
  // };
  // console.log("find", findProfessionalById(id));

  return (
    <div className="components_container">
      <ProfessionalDetail
        professional={professional}
        // specialties={specialties}
      />
      {/* <BookingForm
        professional={professional}
        specialties={specialties}
      /> */}
    </div>
  );
}
