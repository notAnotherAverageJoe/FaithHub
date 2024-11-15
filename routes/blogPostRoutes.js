const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");

router.post("/blogpost", BlogController.createBlogPost);

module.exports = router;
