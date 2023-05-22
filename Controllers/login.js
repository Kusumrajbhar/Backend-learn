const Register = require('../Models/RegisterSchema');

const employeeLogin = async (req,res) => {   //if you will not make it async, it will throw error
    const name = req.body.name;
    const email = req.body.email;
try {
 const allEmployee = await Register.findOne({email: email})
 console.log('allEmployee', allEmployee);
 res.status(200).json({status: 200, msg: "all employees", data: allEmployee})
}
catch(err) {
console.log(err);
res.status(500).json({status: 500, msg: "not retrieved"})
}
}

module.exports = { employeeLogin }

