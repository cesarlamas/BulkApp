const User = require("../models/user");
const router = require("express").Router();
const {getUsers,postUsers} = require("../controllers/usersControllers")
const {login} = require("../controllers/loginControllers")
const {getExercises} = require("../controllers/exercisesControllers")

router.get("/", getUsers);
router.post("/post",postUsers);
router.post("/login", login);

//router exercises
router.get("/exercises", getExercises);

module.exports = router;