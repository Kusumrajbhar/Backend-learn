const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
name: {
    type: "String",
    required: true,
}, 
email: {
    type: "String",
    required: true,
}
})


console.log("A")
const myPromise = new Promise((resolve, reject) => {
fetch('https://dummyjson.com/products')
.then((res) => res.json())  //if we write only res, it will return Response body which will include header, status code, body etc. which is not in usable js formate.
//The res.json() method is a built-in method provided by the Response object in the Fetch API. It is used to extract the JSON data from the response body. 
// res.json() retuns promise, hence we require another .then to handle promise response.
.then(data=> console.log(data))
.catch(err => console.log(err))
})
console.log("B");


module.exports = mongoose.model('Register', registerSchema)