const pool = require("../models/user")
const {bcrypt} = require('bcrypt');

exports.getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

exports.postUsers = async(req,res) => {
    const {name,lastname,email,password} = req.body
    const newUser = await pool.query(
        "INSERT INTO users(name,lastname, email,password)\
         VALUES ($1,$2,$3,$4) RETURNING *",
        [name,lastname,email,password]);
    res.json(newUser);
}