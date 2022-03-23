import React from "react";

export default function AppointmentListItem(props) {
  // component has a dropdown on click //
  const { time, description, professional_id } = props;

  /* convert date to String */
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(props.date).toLocaleDateString([], dateOptions);

  return (
    <li className="appointment">
      <div>{date}</div>
      <div>{time}</div>
      <div>{description}</div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
        alt=""
      />
    </li>
  );
}
