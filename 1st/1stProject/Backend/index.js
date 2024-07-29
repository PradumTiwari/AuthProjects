const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee.js")

const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
    console.log("Request");
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
 try {
    
    const {name, email, password} = req.body;
   
    const Emp= EmployeeModel.create({name, email, password});
    
   return res.status(201).json({message: "User registered"});

 } catch (error) {
    console.log(error);
    throw error;
 }
  
})


app.listen(3001, () => {
    console.log("server is running")
})