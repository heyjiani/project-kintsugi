const db = require("../../lib/db");

const getAllProfessionals = () => {
  return db
    .query(`SELECT * FROM professionals;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getProfessionalById = id => {
  const queryString = `SELECT * FROM professionals WHERE id = $1`;
  const queryValue = [id];

  return db
    .query(queryString, queryValue)
    .then(res => res.rows[0])
    .catch(err => console.log(err.message));
};

module.exports = {
  getAllProfessionals,
  getProfessionalById
};