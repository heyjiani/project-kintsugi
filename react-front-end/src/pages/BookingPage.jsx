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
    // professionals,
    // specialties,
    specialtiesForProfessional,
    getProfessionalById,
    getSpecialtiesByProfessionalId,
  } = useContext(DataContext);

  useEffect(() => {
    getProfessionalById(id);
    getSpecialtiesByProfessionalId(id);
  }, [id]);

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
