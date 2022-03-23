import React from "react";

export default function ProfessionalDetail(prop) {
  return (
    <div className="professional-detail">
      <p className="btn-booking">
        Click here to book with{" "}
        {prop.professional.first_name}
      </p>
      <p className="professional-detail__name">
        {prop.professional.first_name}{" "}
        {prop.professional.last_name}
      </p>
      <div className="professional-detail__tags">
        <li> <img src="https://cdn-icons-png.flaticon.com/512/7154/7154963.png" />{prop.professional.profession}</li>
         {prop.specialties &&
          prop.specialties.map((item, i) => {
            return <li key={i}><img src="https://cdn-icons.flaticon.com/png/512/1620/premium/1620735.png?token=exp=1648008818~hmac=fa5d955242998cbc63a6523944fb22dc" />{item.name}</li>;
          })}
        <li><img src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1648008845~hmac=ed9fe90b862db5ada20c35f9e8a47bad" />
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
