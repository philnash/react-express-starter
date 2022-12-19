const express = require("express");
const { Router } = express;
const router = express.Router();
const { users } = require("../db/models/user");
const db = require("../config/database");

//Middleware
// const { hashSync } = require ('bcrypt')
// const bcrypt = require ('bcrypt')
// const cookie = require('cookie')

//Use this path to test your connection in Postman localhost:3001/user
router.get("/", (req, res) => {
  res.send("router is working");
});

//The below path is .../user/health
router.get("/health", async (req, res) => {
  res.send({
    statusCode: 200,
    message: "router is healthy",
  });
});
//Tammy when you come back to this try using https://www.tcpdump.org/ or  wireshark to capture network traffic and see if the connection is being established and if there are any issues with the traffic
router.get("/users", async (req, res) => {
  try {
    // Use the findAll() function to fetch all users
    const users = await users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
});

//addUser
// router.post('/createuser', async (req, res) => {
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
// router.get('/', async (req, res) => {
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
// router.put('/:userid', async (req, res) => {

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
// router.get('/',async (req, res) => {
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
// router.delete('/:userid', async (req, res, next) => {
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
module.exports = router;
