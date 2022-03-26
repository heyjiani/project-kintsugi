import React from "react";

import AppointmentListItem from "./AppointmentListItem";

export default function AppointmentList(props) {
  const { appointments, professionals } = props;
  /* still need to pass professional data to appointment card and dropdown */
  console.log(professionals);
  const parsedAppointmentData =
    Array.isArray(appointments) &&
    appointments.map((a) => {
      return (
        <AppointmentListItem key={a.id} {...a} professionals={professionals} />
      );
    });

  return (
    <>
      <section>
        <header>
          <h2>Upcoming Appointments</h2>
          <p className="btn-delete">
            Click on an appointment to edit or
            delete
          </p>
        </header>
        <div className="center_list">
          <ul>{parsedAppointmentData}</ul>
        </div>
      </section>
    </>
  );
}
