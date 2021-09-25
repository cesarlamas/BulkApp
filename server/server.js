const express = require("express");
const app = express();
const router = require("./routers/router");
const cors = require("cors")
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(router)


app.listen(process.env.PORT , () => {
    console.log("App is running 🚀")
})