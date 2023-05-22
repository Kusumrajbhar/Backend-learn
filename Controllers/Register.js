 const Register = require("../Models/RegisterSchema");

 const employeeRegister = (req, res) => {
 const registerObj = new Register({
   name: req.body.name,
   email: req.body.email,
 })
 try {
    const registerResponse = registerObj.save();
    res.status(200).json({status: 200, msg: "Employee registered", data: registerResponse});
 }
 catch(err){
  console.log('err', err);
  res.status(500).json({status: 500, msg: "Not registered"})
 }
}

module.exports = { employeeRegister }