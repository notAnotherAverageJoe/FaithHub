const express = require("express");
const router = express.Router();
const SermonController = require("../controllers/SermonController");

router.post("/sermons", SermonController.createSermon);
router.get("/sermons", SermonController.findAllSermons);
module.exports = router;
