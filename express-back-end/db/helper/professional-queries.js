const db = require("../../lib/db");

const getAllProfessionals = () => {
  return db
    .query(`SELECT * FROM professionals;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getProfessionalById = (id) => {
  const queryString = `SELECT * FROM professionals WHERE id = $1`;
  const queryValue = [id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

const getProfessionalBySearch = (
  province,
  language
) => {
  const queryString = `
  SELECT * FROM professionals
  WHERE province = $1
  AND (language_1 = $2 OR language_2 = $2);
  `;

  const queryValue = [province, language];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllProfessionals,
  getProfessionalById,
  getProfessionalBySearch,
};
