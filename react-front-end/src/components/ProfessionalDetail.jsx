import React from "react";

export default function ProfessionalDetail(
  props
) {
  const { professional } = props;
  return (
    <div className="professional-detail">
      <p className="btn-booking">
        click here to book with{" "}
        {professional.first_name}
      </p>
      <p className="professional-detail__name">
        {professional.first_name}{" "}
        {professional.last_name}
      </p>
      <div className="professional-detail__tags">
        <li>{professional.profession}</li>
        {/* {prop.specialties &&
          prop.specialties.map((item, i) => {
            return <li key={i}>{item.name}</li>;
          })} */}
        <li>h</li>
        <li>
          {professional.province}{" "}
          {professional.city}
        </li>
      </div>
      <div className="professional-detail__bottom">
        <img
          className="professional-detail__bottom-img"
          src={professional.icon_url}
          alt=""
        />
        <span>{professional.description}</span>
      </div>
    </div>
  );
}
