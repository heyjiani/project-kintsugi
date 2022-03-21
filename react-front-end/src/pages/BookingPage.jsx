import React from "react";

import ProfessionalDetail from "../components/ProfessionalDetail";

export default function BookingPage() {
  return (
    <div className="components_container">
      <ProfessionalDetail />
      <div
        className="form_container"
        style={{
          background: "white",
          width: 800,
        }}
      >
        Hello i am a form
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062992.png"
            style={{ width: 100 }}
            alt=""
          ></img>
        </div>
        <div>
          Yumi Tanaka
          <br />
          Table of tags
        </div>
        <div>
          Select appointment date: yyy-mmm-dd
          Select appointment time: 09:00:00
        </div>
        <form></form>
        <button>Submit</button>
      </div>
    </div>
  );
}
