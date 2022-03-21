import React from "react";

import AppointmentListItem from "./AppointmentListItem";

export default function AppointmentList() {
  return (
    <section>
      <header>
        <h2>Upcoming Appointments</h2>
        <p>Click on an appointment to edit or delete</p>
      </header>
      <ul>
        <AppointmentListItem />
        <AppointmentListItem />
        <AppointmentListItem />
      </ul>
    </section>
  )
}