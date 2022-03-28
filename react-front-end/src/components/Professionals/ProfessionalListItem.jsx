import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdWorkOutline, MdLanguage } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { AiOutlineTag } from 'react-icons/ai';

export default function ProfessionalListItem(props) {
  const { first_name, last_name, city, province, profession, icon_url, id, specialties } = props;

  const professionalClass = 'professionals__item';
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <li className={professionalClass}>
      <header>
        <h2>
          {first_name} {last_name}
        </h2>
      </header>
      <div>
        <img className="professionals__item__image" src={icon_url} alt={first_name} />
        <ul>
          <li>
            {' '}
            <MdWorkOutline />
            &nbsp;{profession}
          </li>
          <li>
            <AiOutlineTag />
            &nbsp;{specialties[0]}
          </li>
          <li>
            {' '}
            <HiOutlineLocationMarker />
            &nbsp;
            {city}, {province}
          </li>
        </ul>
      </div>
      <footer>
        <button onClick={() => handleOnClick(id)}>Find out more</button>
      </footer>
    </li>
  );
}
