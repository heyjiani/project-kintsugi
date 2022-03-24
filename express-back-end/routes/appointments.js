const router = require("express").Router();
const {
  getAppointments,
  getSingleAppointment,
  getAppointmentsByUserId,
  newAppointment,
} = require("../db/helper/appointment-queries");

//all the appointment routes come here//

const appointmentRoutes = () => {
  router.get("/", (req, res) => {
    console.log("JSON Statham");
    getAppointments()
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  router.get("/all/:id", (req, res) => {
    getAppointmentsByUserId(req.params.id)
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  // router.post("/", (req, res) => {
  //   // console.log(req.body)
  //   const client_id = req.body.client_id
  //   const prof_id = req.body.prof_id
  //   const appointment_data = req.body.appointment_data
  //   newAppointment(client_id, prof_id, appointment_data)
  // });

  router.post("/", (req, res) => {
    console.log('req.body', req.body)
    newAppointment(1, 2, req.body)
      .then((response) => {
        console.log('NA response', response)
        res.json(response)})
      
      .catch((e) => console.log(e));
  });

  return router;
};

module.exports = appointmentRoutes;
