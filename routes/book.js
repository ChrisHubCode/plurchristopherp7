const express = require("express");

const router = express.Router();

const bookCtrl = require("../controllers/book");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const GreenCode = require("../middleware/sharp-config");

router.get("/bestrating", bookCtrl.getBestBooks);
router.post("/:id/rating", auth, bookCtrl.rateBook);

router.post("/", auth, multer, GreenCode, bookCtrl.createBook);

router.put("/:id", auth, multer, GreenCode, bookCtrl.modifyBook);

router.delete("/:id", auth, bookCtrl.deleteBook);

router.get("/", bookCtrl.getAllBook);

router.get("/:id", bookCtrl.getOneBook);

module.exports = router;
