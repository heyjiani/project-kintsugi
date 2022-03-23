import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import ProfessionalDetail from "../components/ProfessionalDetail";
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
        // specialties={specialties}
      />
      {/* <BookingForm
        professional={professional}
        specialties={specialties}
      /> */}
    </div>
  );
}
