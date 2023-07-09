const express = require("express");
const router = express.Router();
const password = require("../middleware/password");

const userCtrl = require("../controllers/user");
const rateLimit = require("../middleware/rate-limit");

router.post("/signup", rateLimit, password, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
