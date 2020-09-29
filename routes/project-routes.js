const router = require("express").Router();
projectsController = require("../controllers/projects-controller");

router.route("/projects").get(projectsController.findAll);

router.route("/projects/:filter").get(projectsController.findByFilter);

module.exports = router;