const express = require('express')

//requiring database
const connectDB=require('./config/db.js')

//require routes

const studentRoutes=require('./routes/studentRoute.js');
//running the db
connectDB()

const port = 1000;

const app = express()

//parse=> html form data => json ,middleware
app.use(express.json());

// usko hata k => obeject {name: aarav ,age:21,};

app.use(express.urlencoded ({extended:true}));

app.set('view engine','ejs');

app.use("/",studentRoutes);

app.listen(port, () => {
    console.log("The server is running at port 3000")
})
//models s studnt uthao

const Student =require('../models/Student');

const studentController={

    //home page m leke jayega..

    home:(req,res)=>{
        res.render("home");
    },

    // students k data show krne k lie

    getdata:async (req,res)=>{

        //sare students render krega
        const students= await Student.find();

        res.render("students",{students});
       

    },

    //to get the form

    addPage:(req,res)=>{
        res.render('form')
    },

    //to create student
    createStudent:async (req,res)=>{
        await Student.create(req.body);

        //auto matic data show ho

        res.redirect('/students');
    },

    //edit page  show krne k lie
    editPage:async (req,res)=>{

        const student =await Student.findById(req.params.id);

        res.render('edit',{student});

    },

    //update student krne k lie

    updateStudent:async (req,res)=>{
        await Student.findByIdAndUpdate(req.params.id,req.body)
        res.redirect("/students")
    },

    //delete krne k lie

    deleteStudent:async (req,res)=>{
        await Student.findByIdAndDelete(req.params.id);
        res.redirect("/students")
    }
    
}
module.exports=studentController;
