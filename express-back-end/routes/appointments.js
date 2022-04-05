const router = require("express").Router();
const {
  getAppointments,
  getAppointmentsByUserId,
  newAppointment,
} = require("../db/helper/appointment-queries");

//all the appointment routes come here//

const appointmentRoutes = () => {
  router.get("/", (req, res) => {
    getAppointments()
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  router.get("/client/:id", (req, res) => {
    getAppointmentsByUserId(req.params.id)
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  router.post("/", (req, res) => {
    newAppointment(1, 2, req.body)
      .then((response) => {
        console.log('NA response', response)
        res.json(response)
      })

      .catch((e) => console.log(e));
  });

  return router;
};

module.exports = appointmentRoutes;
