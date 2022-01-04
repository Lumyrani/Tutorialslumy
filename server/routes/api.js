const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const mongoose =require('mongoose')
const User =require('../models/users')
const Tutorial =require('../models/tutorials');
const db ="mongodb+srv://Lumy:LumyMongo@cluster0.dfiho.mongodb.net/tutorialDB?retryWrites=true&w=majority"
// const db ="mongodb+srv://Lumy:LumyMongo@cluster0.dfiho.mongodb.net/tutorialDB?retryWrites=true&w=majority"
// mongodb+srv://Lumy:<password>@cluster0.dfiho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(db,err=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected to db')
    }
})

router.post('/tutorials',(req,res)=>{
    let tutorialData= req.body
    let tutorial = new Tutorial(tutorialData);
    tutorial.save((err,res)=>{
        if (err){
            console.log(err)
        }else{
            
           console.log("auth")
        //    res.send({tutorial})
        }

    });
    // res.send("response")
    res.json(tutorial)
    // res.write("<h1> Welcome "+ req.body+ '</h1>')
    // res.end('Session id:' + req.body)
})


function verifyToken(req,res,next){
    console.log(req.headers.authorization)
    if(!req.headers.authorization){
        return res.status(401).send('unauthorized request')
    }
    let token=  req.headers.authorization.split(' ')[1]
    if(token == "null"){
        return res.status(401).send('unauthorized request')
    }
    let  payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('unauthorized request')
    }

    req.userId =payload.subject
    next()



}
router.get('/',(req,res)=>{
    res.send("from api route")
})


router.post('/register',(req,res)=>{
    let userData= req.body
    let user = new User(userData);
    user.save((err,registeredUser)=>{
        if (err){
            console.log (err)
        }else{
            let payload ={subject:registeredUser._id}
            let token=jwt.sign(payload,"secretKey")
            res.status(200).send({token})
            // res.status(200).send(registeredUser)
        }
    });
})

router.post('/login',(req,res)=>{
    let userData=req.body;
    // User.findOne({email:userData.email,password:userData.password},(error,user)=>{
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
console.log(error)
        }else{
            if(!user){
                res.status(401).send('invalid email')
            }else{
                let payload={subject:user._id}
                let token = jwt.sign(payload,"secretKey")
                // res.status(200).send(user)
                res.status(200).send({token})
            }
        
        }
    })
})
    
//        Tutorial.insertMany([
//             {
//                 name:"ajesh",duration:"aj@aj.com"
//             },
//             {
//                 name:"bbb",duration:"bbb@bbb.com"
//             }
//         ]).then(result=>{
//             console.log("remaining customers")
//             return Tutorial.find()
//         }
//     )
//     .catch(err=>{console.log(err)})
// })
router.get('/free',(req,res)=>{
        let tutorialData=req.body;
        // User.findOne({email:userData.email,password:userData.password},(error,user)=>{
       Tutorial.find({},(error,respo)=>{
            if(error){
    console.log(error)
            }else{
                // let data= [respo.name,respo.duration]
                res.status(200).send(respo)
                // res.json(respo)
                // res.json(data)
            }
        // }).then(result=>{return Tutorial.find()})
        // .catch(err=>{console.log(err)})
// })
// .then(result=>{
//         // console.log(result)
//         console.log("customers inserted:",result)
    })

})
    // -------------------------------free from json file WebGLActiveInfo.............
    // router.get('/free',(req,res)=>{
    //     let freetut=[
    //         {
    //             _id:1,
    //             name:"Angular",
    //             description:"Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces ...",
    //             duration:"2months"
    //         },
    //         {
    //             _id:2,
    //             name:"mongoDb",
    //             description:"We're the creators of MongoDB, the most popular database for modern apps, and MongoDB Atlas, the global cloud database on AWS, Azure, and GCP.ations. Join the community of millions of developers who build compelling user interfaces ...",
    //             duration:"2months"
    //         }
    //     ]
           
    //     res.json(freetut)
    // })
    // -------------
    router.get('/registered',verifyToken,(req,res)=>{
        let freetut=[
            {
                _id:1,
                name:"Angular",
                description:"Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces ...",
                duration:"2months"
            },
            {
                _id:2,
                name:"mongoDb",
                description:"We're the creators of MongoDB, the most popular database for modern apps, and MongoDB Atlas, the global cloud database on AWS, Azure, and GCP.ations. Join the community of millions of developers who build compelling user interfaces ...",
                duration:"2months"
            }
        ]
        res.json(freetut)
    })

module.exports = router