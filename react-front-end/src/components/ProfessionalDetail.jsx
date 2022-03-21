import React from "react";

export default function ProfessionalDetail() {
  return (
    <div className="professional-detail">
      <p className="btn-booking">
        click here to book with first name
      </p>
      <p className="professional-detail__name">
        Professional's full name
      </p>
      <div className="professional-detail__tags">
        <li>profession</li>
        <li>specialties</li>
        <li>location city</li>
      </div>
      <div className="professional-detail__bottom">
        <img
          className="professional-detail__bottom-img"
          src="https://thispersondoesnotexist.com/image?yesitsmeagain=”&rand()"
          alt=""
        />
        <span>
          -description- The clowns had taken over.
          And yes, they were literally clowns.
          Over 100 had appeared out of a small VW
          bug that had been driven up to the bank.
          Now they were all inside and had taken
          it over.
        </span>
      </div>
    </div>
  );
}
