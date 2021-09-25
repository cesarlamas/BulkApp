const Pool = require('pg').Pool

const pool = new Pool({
  user: 'cesarlamasdavila',
  host: 'localhost',
  database: 'bulkapp',
  password: process.env.password,
  port: 5433,
});

// exports.getUsers = (request, response) => {
//     pool.query('SELECT * FROM users', (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log(results)
//       response.status(200).json(results.rows)
//     })
//   };

// exports.postUsers = async(req,res) => {
//     const {name,lastname,email,password} = req.body;
//     const newUser = await pool.query("INSERT INTO users(name,lastname, email,password) VALUES ($1,$2,$3,$4) RETURNING *",[name,lastname,email,password]);
//     console.log(newUser)
//     res.json(newUser);
// }

module.exports = pool;

