const router = require("express").Router();
const { createUser } = require("../controllers/user.controller");

router.post("/create", createUser);

module.exports = router;
