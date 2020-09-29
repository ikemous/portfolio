const router = require("express").Router();
projectsController = require("../controllers/projects-controller");

router.route("/project").get(projectsController.findAll);

router.route("/project/:filter").get(projectsController.findByFilter);

module.exports = router;