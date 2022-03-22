import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import ProfessionalListItem from "./ProfessionalListItem";

export default function ProfessionalList(props) {
  const { professionals } = props;
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/booking');

  const parsedProfessionalData =
    Array.isArray(professionals) && professionals.map(p => {
      return <ProfessionalListItem key={p.id} {...p} onClick={handleOnClick}/>
    });

  return (
    <div className="professionals__container">
      <h2 className="display-info">Displaying professionals who speak Japanese in BC</h2>
      <ul className="professionals__list">
      { parsedProfessionalData }
      </ul>
    </div>
  );
}
