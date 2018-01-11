var express = require("express");
var router = express.Router();
var note = require("../service/").note;

router.get("/", note.list);
router.get("/:id", note.findById);
router.post("/", note.create);
router.put("/:id", note.update);
router.delete("/:id", note.delete);
module.exports = router;
