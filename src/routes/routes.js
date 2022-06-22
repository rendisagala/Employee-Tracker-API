const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.route("/").get(controller.getAll);
router.route("/:id").get(controller.getById);
router.route("/add").post(controller.create);

module.exports = router;
