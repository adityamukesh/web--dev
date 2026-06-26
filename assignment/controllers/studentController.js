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
