import React from "react";

export default function ProfessionalDetail(prop) {
  return (
    <div className="professional-detail">
      <p className="btn-booking">
        click here to book with{" "}
        {prop.professional.first_name}
      </p>
      <p className="professional-detail__name">
        {prop.professional.first_name}{" "}
        {prop.professional.last_name}
      </p>
      <div className="professional-detail__tags">
        <li>{prop.professional.profession}</li>
        {prop.specialties &&
          prop.specialties.map((item, i) => {
            return <li key={i}>{item.name}</li>;
          })}
        <li>
          {prop.professional.province}{" "}
          {prop.professional.city}
        </li>
      </div>
      <div className="professional-detail__bottom">
        <img
          className="professional-detail__bottom-img"
          src={prop.professional.icon_url}
          alt=""
        />
        <span>
          {prop.professional.description}
        </span>
      </div>
    </div>
  );
}
