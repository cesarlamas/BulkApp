const User = require("../models/user");
const router = require("express").Router();
const {getUsers,postUsers} = require("../controllers/usersControllers")
const {login} = require("../controllers/loginControllers")
const {getExercises} = require("../controllers/exercisesControllers")
const {createRoutine} = require("../controllers/routineControllers")
const {postExercisesInRoutine} = require("../controllers/routineControllers")
const {getRoutineByUserId} = require("../controllers/routineControllers")

router.get("/", getUsers);
router.post("/post",postUsers);
router.post("/login", login);

// router create routine 
router.post("/newroutine", createRoutine)
router.post("/exerciseroutine",postExercisesInRoutine)
router.get("/getroutinebyuserid/:id",getRoutineByUserId)
//router exercises
router.get("/exercises", getExercises);


module.exports = router;