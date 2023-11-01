const Student = require("../Models/StudentSchema")

const newStudent = (req,res) =>
{
    const student = new Student(
        {
            id : req.body.id,
            name : req.body.name,
            age : req.body.age
        }
    );

    try{
        
        sim = student.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}

module.exports = {
    newStudent,
  };