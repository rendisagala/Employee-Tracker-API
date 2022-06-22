const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.route("/").get(controller.getAll);
router.route("/add").post(controller.create);

module.exports = router;
