const db = require("../../lib/db");

const getAllSpecialties = () => {
  const queryString = `
    SELECT
      specialties.id,
      specialties.name,
      array_agg(DISTINCT professional_id) AS professionals
    FROM specialties
    LEFT JOIN professionals_specialties ON specialties.id = specialty_id
    GROUP BY specialties.id
    ORDER BY name;
  `;
  return db
    .query(queryString)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getSpecialtiesByProfessionalId = (
  professional_id
) => {
  const queryString = `
    SELECT specialties.id, name, professional_id FROM specialties
    JOIN professionals_specialties ON specialties.id = specialty_id
    JOIN professionals ON professionals.id = professional_id
    WHERE professionals.id = $1;
  `;
  const queryValue = [professional_id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllSpecialties,
  getSpecialtiesByProfessionalId,
};
