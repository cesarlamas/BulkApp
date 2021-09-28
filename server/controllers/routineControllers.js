const pool = require("../models/user");

exports.createRoutine = async(req,res) => {
    try{
        const {name,userid} = req.body;
        const newRoutine = await pool.query(
            "INSERT INTO routine(name,userid)\
            VALUES ($1,$2) RETURNING *",
            [name,userid]);
        res.json(newRoutine)
    } catch(error) {
        res.status(401).json({error: error.message});
    }
}   

exports.getRoutineByUserId = async(req,res) => {
    try {
        const selectRoutine = await pool.query('SELECT * FROM routine WHERE userid = $1', [req.params.id])
        res.json(selectRoutine.rows)
    } catch(error) {
        res.status(401).json({error: error.message});
    }

}

exports.postExercisesInRoutine = async(req,res) => {
    const {exerciseid,routineid} = req.body
    try {
        const insert =  await pool.query('INSERT INTO routine_exercise(exerciseid,routineid) VALUES ($1,$2) RETURNING *',[exerciseid,routineid])
        res.json(insert)
    } catch(e){
        res.status(401).json({error: error.message});
    }
}