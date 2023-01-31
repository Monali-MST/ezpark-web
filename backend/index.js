import express from "express";
import mysql from "mysql";

const app= express()
const db = mysql.createConnection({
    host:"ezpark-db.cvhbqqtsx1je.ap-northeast-1.rds.amazonaws.com",
    user:"admin",
    password:"ezPark!123",
    database:"EzPark"
})

app.get("/",(req,res)=>{
    res.json("Hello this is the backend")
})

app.listen(8800, ()=>{
    console.log("Connected to backend!!")
})