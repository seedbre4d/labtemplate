var express = require("express");
var router = express.Router();
var category = require("../service/").category;

router.get("/", category.list);
router.get("/:id", category.findById);
router.post("/", category.create);
router.put("/:id", category.update);
router.delete("/:id", category.delete);
module.exports = router;
