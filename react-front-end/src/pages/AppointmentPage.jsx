import React, { useContext } from "react";

import AppointmentList from "../components/AppointmentList";
import { DataContext } from "../providers/DataProvider";

export default function AppointmentPage() {
  const { appointments, professionals } = useContext(DataContext);

  return (
    <div className="components_container">
      <AppointmentList appointments={appointments} professionals={professionals} />
    </div>
  );
}
