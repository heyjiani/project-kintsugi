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
    specialtiesForProfessional,
    getProfessionalById,
    getSpecialtiesByProfessionalId,
  } = useContext(DataContext);

  useEffect(() => {
    getProfessionalById(id);
    getSpecialtiesByProfessionalId(id);

  }, [id]);

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