import React, { useContext } from "react";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdWorkOutline, MdLanguage } from 'react-icons/md'
import { IconContext } from "react-icons";
import { AiOutlineTag } from 'react-icons/ai';
import { DataContext } from "../../providers/DataProvider";

export default function ProfessionalDetail(props) {
  const { professional, specialties } = props;
  const { show, setShow } = useContext(DataContext);

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>{professional && <> <h2>Book with a professional now. </h2><p className="professional-detail__name"><strong>
      {professional.first_name}&nbsp;
      {professional.last_name}</strong>
    </p>
      <div className="professional-detail">




        <div className="professional-detail__tags">
          <li><MdWorkOutline /><br />{professional.profession}</li>
          {specialties &&
            specialties.map((item, i) => {
              return <li key={i}><AiOutlineTag /><br />{item.name}</li>;
            })}
          <li><HiOutlineLocationMarker /><br />
            {professional.city},&nbsp;{professional.province}

          </li>
        </div>
        <div className="professional-detail__bottom">
          <img
            className="professional-detail__bottom-img"
            src={professional.icon_url}
            alt=""
          />
          <span className="description">{professional.description}</span>
        </div>
        <p className="btn-booking" onClick={handleShow}>
          Click here to book with&nbsp;
          {professional.first_name}.
        </p>
      </div></>}
    </>

  );
}
