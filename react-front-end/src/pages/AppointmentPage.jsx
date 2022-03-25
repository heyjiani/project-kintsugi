import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import AppointmentList from "../components/AppointmentList";
import { DataContext } from "../providers/DataProvider";

export default function AppointmentPage() {
  let { id } = useParams();
  const { professionals, getAppointmentsByUserId, clientAppointments } = useContext(DataContext);

  useEffect(() => {
    getAppointmentsByUserId(1)

  }, []);

  console.log(clientAppointments);

  return (
    <div className="components_container">
      <AppointmentList appointments={clientAppointments} professionals={professionals} />
    </div>
  );
}
