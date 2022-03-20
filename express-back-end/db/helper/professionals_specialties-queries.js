const db = require("../../lib/db");

const getSpecialtiesByProfessionalId = professional_id => {
  const queryString = `
    SELECT name FROM specialties
    JOIN professionals_specialties ON specialties.id = specialty_id
    JOIN professionals ON professionals.id = professional_id
    WHERE professionals.id = $1;
  `
  const queryValue = [professional_id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

module.exports = {
  getSpecialtiesByProfessionalId
};