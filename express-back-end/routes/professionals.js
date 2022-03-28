const router = require("express").Router();
const {
  getAllProfessionals,
  getProfessionalById,
  getProfessionalBySearch,
} = require("../db/helper/professional-queries");
const {
  getSpecialtiesByProfessionalId,
} = require("../db/helper/specialties-queries");

// routes for professionals API //

const professionalRoutes = () => {
  router.get("/", (req, res) => {
    getAllProfessionals()
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  router.get("/search/:prov/:lang", (req, res) => {
    const prov = req.params.prov;
    const lang = req.params.lang;
    getProfessionalBySearch(prov, lang)
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  })

  router.get("/:id/specialties", (req, res) => {
    getSpecialtiesByProfessionalId(req.params.id)
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  router.get("/:id", (req, res) => {
    getProfessionalById(req.params.id)
      .then((response) => res.json(response))
      .catch((e) => console.log(e));
  });

  return router;
};

module.exports = professionalRoutes;
