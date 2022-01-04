// const Customer=require('./db')

// Customer.insertMany([
//     {
//         name:"ajesh",email:"aj@aj.com",products:"computer"
    
//     },
//     {
//         name:"bbb",email:"bbb@bbb.com"
//     }
// ]).then(result=>{
//     // console.log(result)
//     console.log("customers inserted:",result)
//     return Customer.deleteOne({name:"bbb"})
// }).then(deletedCustomer=>{
//     console.log("customer deleted",deletedCustomer)
//     return Customer.find()
// }).then(
//     remainingCustome =>{
//    console.log("remaining customers",remainingCustome)
//     }
// )
// .catch(err=>{console.log(err)})