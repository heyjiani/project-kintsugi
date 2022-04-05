const router = require("express").Router();
const {
  getAllSpecialties,
  getSpecialtiesByProfessionalId,
} = require("../db/helper/specialties-queries");

// routes for specialties API //
//api/specialties
const specialtiesRoutes = () => {
  /* All specialties */
  router.get("/", (req, res) => {
    getAllSpecialties()
      .then((specialties) =>
        res.json(specialties)
      )
      .catch((e) => console.log(e));
  });

  return router;
};

module.exports = specialtiesRoutes;
