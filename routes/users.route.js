const express = require("express");
const { getUsers,seveUser } = require("../controller/users.controller");
const router = express.Router();

router.get("/users",getUsers);

router.post("/users",seveUser)

module.exports = router;