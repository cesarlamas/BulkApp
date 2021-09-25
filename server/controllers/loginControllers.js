const pool = require("../models/user")

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("This is the email" + req.body.email)
      const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
      //PASSWORD CHECK
      if (password !== users.rows[0].password) {
        return res.status(401).json({error: "Incorrect password"});
      }
      res.json(users.rows[0]);
    }catch (error) {
      res.status(401).json({error: error.message});
    }
}