const db = require("../../lib/db");

//all the appointment routes queries come here//

const getAppointments = () => {
  return db
    .query(`SELECT * FROM appointments;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getSingleAppointment = (id) => {
  const queryString = `SELECT * FROM clients
  WHERE id = $1;`;
  const queryValue = [id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAppointments, getSingleAppointment };
