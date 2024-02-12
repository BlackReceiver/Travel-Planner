import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travel_planner"
})

app.listen(8081, () => {
    console.log("Listening");
})