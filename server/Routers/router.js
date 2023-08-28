const express = require("express");
const router = express.Router();

const {
  getAllData,
  getSingleData,
  getAllDataPaginated,
} = require("../Controllers/controller");

router.route("/").get(getAllDataPaginated);
router.route("/all").get(getAllData);
router.route("/:id").get(getSingleData);

module.exports = router;
