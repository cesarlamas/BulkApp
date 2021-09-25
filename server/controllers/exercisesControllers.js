const pool = require("../models/user");

exports.getExercises = (request, response) => {
    pool.query('SELECT * FROM exercise', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };