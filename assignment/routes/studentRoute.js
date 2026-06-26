//redirect

// get("/",(req,res)=>{
//     res.send("hi");
// })

// 1) exprss requrire

const express=require('express')
const router=express.Router();
//req controller

const studentController=require('../controllers/studentController')


// get-> home

router.get("/",studentController.home);

//get => students mongo db

router.get('/students',studentController.getdata);

//get => add student page form

router.get('/add',studentController.addPage);

//post ->student details

router.post('/add',studentController.createStudent);

//get => edit page

router.get('/edit/:id',studentController.editPage)

//post -> edit page update studen

router.post('/edit/:id',studentController.updateStudent)

router.get('/delete/:id',studentController.deleteStudent)

module.exports=router;