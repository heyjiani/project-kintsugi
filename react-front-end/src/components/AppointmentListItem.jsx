import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


export default function AppointmentListItem(props) {
  // component has a dropdown on click //
  const { time, description } = props;

  /* convert date to String */
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(props.date).toLocaleDateString([], dateOptions);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/video');
  }
  return (
    <li className="appointment">
      <div>{date}</div>
      <div>{time}</div>
      <div>{description}</div>
      {/* <img
        src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
        alt=""
      /> */}

      <img onClick={handleClick}
        src="https://cdn-icons-png.flaticon.com/128/4185/4185236.png"
        alt=""
      />

    </li>
  );
}
