import React from "react";

export default function ProfessionalDetail() {
  return (
    <div className="professional-detail">
      <p className="btn-booking">
        click here to book with first name
      </p>
      <p>Professional's full name</p>
      <div>
        <ul>
          <li>profession</li>
          <li>specialties</li>
          <li>location city</li>
        </ul>
      </div>
      <div>
        <img
          src="https://thispersondoesnotexist.com/image?yesitsmeagain=”&rand()"
          alt=""
        />
        <p>description</p>
      </div>
    </div>
  );
}
