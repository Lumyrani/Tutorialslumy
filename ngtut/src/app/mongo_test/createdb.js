


// // MongoClient.connect(url,(err,db)=>{
// // if(err)throw err;

// //     // console.log("Database created")

// //     const dbo = db.db("myDB")
// //     dbo.createCollection("users",function(err,res){
// //         if (err) throw err;
// //         console.log("collection created")
    
// //     db.close()
// //     })

// // })
// // ---------------database created
// // MongoClient.connect(url,(err,db)=>{
// //     if(err)throw err;
    
// //         // console.log("Database created")
    
// //         const dbo = db.db("myDB")
// //         const data= {name:"NOdejs",duration:"1 month"}
// //         dbo.collection("users").insertOne(data,(err,res)=>{
// //             if (err) throw err;
// //             console.log("document inserted")
        
// //         db.close()
// //         })
    
// //     })
// // ----------------collection created
// const MongoClient =require('mongodb').MongoClient
// // const url = "mongodb://localhost:27017/myDB"
//     if(err)throw err;
    
//         // console.log("Database created")
    
//         const dbo = db.db("myDB")
//         // const data= {name:"NOdejs",duration:"1 month"}
//         dbo.collection("users").findOne({},(err,res)=>{
//             if (err) throw err;
//             console.log(res.name)
        
//         db.close()
//         })
    
//     })