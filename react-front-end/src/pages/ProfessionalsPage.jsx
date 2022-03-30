import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfessionalList from '../components/Professionals/ProfessionalList';
import Sidebar from '../components/Professionals/Sidebar';
import { DataContext } from '../providers/DataProvider';

export default function ProfessionalsPage() {
  let { prov, lang } = useParams();
  const {
    getProfessionalBySearch,
    searchedProfessionals,
    specialties,
    handleCheck,
    checkedValues,
    getFilteredProf,
    checkedCategories,
    getProfsByCategory,
    handleRadio
  } = useContext(DataContext);

  useEffect(() => {
    getProfessionalBySearch(prov, lang);
  }, []);

  const getProfessions = (profs) => {
    const allProfessions = [];
    profs.forEach((p) => {
      if (!allProfessions.includes(p.profession)) {
        allProfessions.push(p.profession);
      }
    });
    return allProfessions;
  };

  const getCities = (profs) => {
    const allCities = [];
    profs.forEach((p) => {
      if (!allCities.includes(p.city)) {
        allCities.push(p.city);
      }
    });
    return allCities;
  };

  const filteredProfData = getProfsByCategory(
    getFilteredProf(searchedProfessionals, checkedValues),
    checkedCategories
  );

  return (
    <div className="professionals">
      <Sidebar
        cities={getCities(searchedProfessionals)}
        professions={getProfessions(searchedProfessionals)}
        specialties={specialties}
        handleCheck={handleCheck}
        handleRadio={handleRadio}
      />
      <ProfessionalList professionals={filteredProfData} specialties={specialties} />
    </div>
  );
}
