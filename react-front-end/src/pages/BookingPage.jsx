import React, {
  useContext,
  useEffect,
  // useState,
} from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/Booking/BookingForm";
import ProfessionalDetail from "../components/Booking/ProfessionalDetail";
import { DataContext } from "../providers/DataProvider";

export default function BookingPage() {
  let { id } = useParams();
  const {
    professional,
    professionals,
    // specialties,
    pro,
    specialtiesForProfessional,
    getProfessionalById,
    getSpecialtiesByProfessionalId,
    findProfessionalById,
  } = useContext(DataContext);

  useEffect(() => {
    getProfessionalById(id);
    getSpecialtiesByProfessionalId(id);
    findProfessionalById(id);
  }, [id]);

  // console.log(professionals);
  console.log(pro);

  // const findProfessionalById = (id) => {
  //   professionals.filter(
  //     (item) => item.id === parseInt(id)
  //   );
  // };

  // console.log(findProfessionalById(id));

  // const [show, setShow] = useState(false);

  //fetch professional by id//

  // const findProfessionalById = (id) => {
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
        specialties={specialtiesForProfessional}
      />
      <BookingForm
        professional={professional}
        specialties={specialtiesForProfessional}
      />
    </div>
  );
}

// state that detects and then displays - conditional wrapping
// useContext or state- pass down click function via props
// booking page runs the check of the props