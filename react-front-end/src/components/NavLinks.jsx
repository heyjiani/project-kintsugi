import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="navigation__links">
      <div>
        <a href="/">About</a>
      </div>
      <div>
        <a href="/">Get Help</a>
      </div>
      <div>
        <NavLink to="/appointments/client/1">&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
         View Appointments</NavLink>
      </div>
    </div>
  );
}
