const express = require('express')
const { Router } = express
// const router = Router()
// const router = express.Router()
const userRouter = express.Router()
const { user } = require('../db/models/user')
const db = require('../config/database')

// const { hashSync } = require ('bcrypt')
// const bcrypt = require ('bcrypt')
// const cookie = require('cookie')

//Middleware

//Use this path to test your connection in Postman localhost:3001/user
userRouter.get('/', (req, res)=>{
    res.send('userRouter is working')
})

//The below path is .../user/health
userRouter.get('/health', async(req, res)=> {
    res.send ({
        statusCode:200, 
        message: "userRouter is healthy"
})
})


userRouter.get('/users', async (req, res) => {
    const users = await user.findAll()
    res.json(users)
})


//addUser
// userRouter.post('/createuser', async (req, res) => {
//     const hashedPassword = bcrypt.hashSync(password);
//     let { username, firstname, lastname, email, password } = req.body;
//     console.log(`This is hashedPassword: ` + `${ hashedPassword }`)
//     db.user.findOne({ where: { email: email }, paranoid: false })
//         .then(find => {
//             if (find) {
//                 throw new RequestError('Email is already in use', 409);
//             }
//             return db.user.create({
//                 userrole: "Customer",
//                 username: username,
//                 firstname: firstname,
//                 lastname: lastname,
//                 email: email,
//                 password: hashedPassword,
//             })

//         })
//         .then(user => {
//             if (user) {
//                 return res.status(400).json("Can't find your password");
//             }
//             else
//                 res.status(500).json({ 'success': false });
//         })
//         .catch(err => {
//             console.log(err)
//             next(err);
//         })
// })



//Find users
// userRouter.get('/', async (req, res) => {
//     db.user.findOne({ attributes: ["username", "firstname", "lastname"], where: { email: req.query.email }, paranoid: false })
//         .then(user => {
//             if (user) {
//                 return res.status(200).json({ success: true, data: user });
//             }
//             else
//                 res.status(500).json({ 'success': false });
//         })
//         .catch(err => {
//             console.log(err)
//             next(err);
//         })
// })

//Update user info
// userRouter.put('/:userid', async (req, res) => {
   
//     const { userId, firstName, lastName, email, streetaddress, password, } = req.body;
//     let passwordHash = hashSync(password);
//     db.user.findOne({ where: { email: email }, paranoid: false })
//         .then(user => {
//             if (!user) {
//                 throw new RequestError('User is not found', 409);
//             }
//             return db.user.update({
//                 username: username ? username: user.username, 
//                 firstname : firstnameirstname ? firstname : user.firstname,
//                 lastname: lastname ? lastname : user.lastname,
//                 password: password ? passwordHash : user.password,
//             }, { where: { userid: userid } })

//         })
//         .then(user => {
//             if (user) {
//                 return res.status(200).json({ success: true, msg: "User successsfully updated" });
//             }
//             else
//                 res.status(500).json({ 'success': false });
//         })
//         .catch(err => {
//             console.log(err)
//             next(err);
//         })
// })

//login in the user
// userRouter.get('/',async (req, res) => {
    // const {username,password}=req.body
    // try{
    //     const user = await UserModel.findOne({username: username})

    //     if(user)
    //     {
    //         const validity = await user.compare(password, user.password)

    //         validity? res.status(200).json(loginUser):res.status(400)
    //     }
    //     else{
    //         res.status(404).json("Non existant user")
    //     }
    // }catch(error){
    //     res.status(500).json({error})
    // }
// })

//Delete user 
// userRouter.delete('/:userid', async (req, res, next) => {
//     const userid = Number(req.params.userid) 
//     db.user.findOne({ where: { userid: userid } })
//         .then(data => {
//             if (data) {
//                 return db.user.destroy({ where: { userid: userid} }).then(r => [r, data])
//             }
//             throw new RequestError('User is not found', 409)
//         })
//         .then(re => {
//             return res.status(200).json({ 'status': "Successfully deleted user" });
//         }).catch(err => {
//             next(err)
//         })
// })
module.exports = userRouter