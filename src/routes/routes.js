const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.route("/").get(controller.getAll);
router.route("/").post(controller.create);
router.route("/:id").get(controller.getById);
router.route("/:id").put(controller.update);
router.route("/:id").delete(controller.delete);

module.exports = router;
