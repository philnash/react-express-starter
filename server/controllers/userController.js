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
router.post('/createuser', async (req, res) => {
    // const hashedPassword = bcrypt.hashSync(password);
    let { username, firstname, lastname, email, hashedPassword } = req.body;
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(find => {
            if (find) {
                throw new RequestError('Email is already in use', 409);
            }
            return db.user.create({
                userrole: "Customer",
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
            })

        })
        .then(user => {
            if (user) {
                return res.status(400).json("Can't find your password");
            }
            else
                res.status(500).json({ 'success': false });
        })
        .catch(err => {
            console.log(err)
            next(err);
        })
})

//Find users
router.get('/findusers', async (req, res) => {
    db.users.findOne({ attributes: ["username", "firstname", "lastname"], where: { email: req.query.email }, paranoid: false })
        .then(users => {
            if (users) {
                return res.status(200).json({ success: true, data: users });
            }
            else
                res.status(500).json({ 'success': false });
        })
        .catch(err => {
            console.log(err)
            next(err);
        })
})

//Update user info
router.put('/:id', async (req, res) => {

    const { id, firstName, lastName, email,hashedPassword, } = req.body;
    // let passwordHash = hashSync(password);
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(users => {
            if (!users) {
                throw new RequestError('User is not found', 409);
            }
            return db.users.update({
                username: username ? username: users.username,
                firstname : firstname ? firstname : users.firstname,
                lastname: lastname ? lastname : users.lastname,
                hashedPassword: hashedPassword ? hashedPassword : users.hashedPassword,
            }, { where: { id: id } })

        })
        .then(users => {
            if (users) {
                return res.status(200).json({ success: true, msg: "User successsfully updated" });
            }
            else
                res.status(500).json({ 'success': false });
        })
        .catch(err => {
            console.log(err)
            next(err);
        })
})

// login in the user
router.get('/login',async (req, res) => {
const {username,hashedPassword}=req.body
try{
    const users = await users.findOne({username: username})

    if(users)
    {
        const validity = await users.compare(hashedPassword, users.hashedPassword)

        validity? res.status(200).json(loginUser):res.status(400)
    }
    else{
        res.status(404).json("Non existant user")
    }
}catch(error){
    res.status(500).json({error})
}
})

//Delete user
router.delete('/:userid', async (req, res, next) => {
    const id = Number(req.params.id)
    db.users.findOne({ where: { id: id } })
        .then(data => {
            if (data) {
                return db.users.destroy({ where: { id: id} }).then(r => [r, data])
            }
            throw new RequestError('User is not found', 409)
        })
        .then(re => {
            return res.status(200).json({ 'status': "Successfully deleted user" });
        }).catch(err => {
            next(err)
        })
})

module.exports = router;
