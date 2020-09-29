const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router.route("/projects").get(projectsController.findAll);

router.route("/projects/:filter").get(projectsController.findByFilter);

module.exports = router;