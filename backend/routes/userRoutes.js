const express = require("express");
const { registerUser, authUser } = require("../components/userComponents");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;
