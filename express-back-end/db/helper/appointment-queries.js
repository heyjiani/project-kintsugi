const db = require("../../lib/db");

//all the appointment routes queries come here//

const getAppointments = () => {
  return db
    .query(`SELECT * FROM appointments;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getSingleAppointment = (id) => {
  const queryString = `SELECT * FROM appointments
  WHERE id = $1;`;
  const queryValue = [id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.log(err.message);
    });
};

const getAppointmentsByUserId = (client_id) => {
  const queryString = `
    SELECT * FROM appointments
    WHERE client_id  = $1;
  `;
  const queryValue = [client_id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const newAppointment = (
  client_id,
  prof_id,
  appointment_data
) => {
  const { date, time, description } =
    appointment_data;
  const queryValues = [
    client_id,
    prof_id,
    date,
    time,
    description,
  ];
  const queryString = `INSERT INTO appointments (client_id, professional_id, date, time, description) VALUES
  ($1, $2, $3, $4, $5) RETURNING *`;

  return db
    .query(queryString, queryValues)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAppointments,
  getSingleAppointment,
  newAppointment,
  getAppointmentsByUserId,
};
