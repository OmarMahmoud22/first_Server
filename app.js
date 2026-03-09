//get egnore file
require('dotenv').config()

const express = require('express')
const mongooze = require('mongoose')
const User = require('./models/User')
const app = express()


async function dbconection(){
    try{
await mongooze.connect("mongodb://127.0.0.1:27017/test");
console.log("conected");

    }
    catch(error){
    console.log(error);
};
}
dbconection()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})














// function get_data(callback){
//     callback();
//     console.log("use data")
    
// }

// get_data(()=>{
//     console.log("load data")
// })

// function getdata(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=> {
//             resolve("data avvvarige");
//         },1000)
//     })
// }
// function get_username_db(id){
//     return new Promise((resolve,reject) => {
//         resolve({id , username:"mohamed"})
//     })
// };



// async function startapp(){
//     console.log("start")

//     get_username_db(1);

//     console.log("end")
// }

// startapp();
