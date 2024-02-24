import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travel_planner"
})

app.get("/", (req, res) => {
    const sql = "select * from user";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/addnewuser', (req, res) => {
    const sql = "insert into user (user_name, email, password, role, gender) values (?)";
    const values = [...Object.values(req.body)];
    db.query(sql,[values],(err,data) => {
        if (err) return res.json("Error");
        return res.json({data})
    });
});

app.put('/edituser/:id', (req, res) => {
    const sql = "UPDATE user SET user_name=?, email=?, role=? WHERE user_id=?";
    const id = req.params.id;
    const values = [req.body.name, req.body.email, req.body.role]
    console.log(req.body.name)
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.delete('/manageaccount/:id', (req, res) => {
    const sql = "delete from user where user_id=?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Listening");
})