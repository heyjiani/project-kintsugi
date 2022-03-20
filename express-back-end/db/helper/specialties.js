const db = require("../../lib/db");

//all the specialties routes queries comes here//

const getAllSpecialties = () => {
  return db
    .query(`SELECT * FROM specialties;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};
