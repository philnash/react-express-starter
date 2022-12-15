const router = require('express').Router()

const { hashSync } = require ('bcrypt')
// const bcrypt = require ('bcrypt')
const { db } = require('../index')
// const cookie = require('cookie')
// const { User } = db

//addUser
router.post('/', async (req, res) => {
    const { username, firstname, lastname, email, password, } = req.body;
    let passwordHash = bcrypt.hashSync(password);
    const { firstName, lastName, email, streetaddress, password, } = req.body;
    let passwordHash = hashSync(password);
    console.log({passwordHash})
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(find => {
            if (find) {
                throw new RequestError('Email is already in use', 409);
            }
            return db.user.create({
                userrole: "customer",
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: passwordHash,
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

router.get('/health', async(req, res)=> {
    return {
        statusCode:200, 
        message: "server is healthy"
    }
})

//Find users
router.get('/', async (req, res) => {
    db.user.findOne({ attributes: ["username", "firstname", "lastname"], where: { email: req.query.email }, paranoid: false })
        .then(user => {
            if (user) {
                return res.status(200).json({ success: true, data: user });
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
router.put('/:userid', async (req, res) => {
   
    const { userId, firstName, lastName, email, streetaddress, password, } = req.body;
    let passwordHash = hashSync(password);
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(user => {
            if (!user) {
                throw new RequestError('User is not found', 409);
            }
            return db.user.update({
                username: username ? username: user.username, 
                firstname : firstnameirstname ? firstname : user.firstname,
                lastname: lastname ? lastname : user.lastname,
                password: password ? passwordHash : user.password,
            }, { where: { userid: userid } })

        })
        .then(user => {
            if (user) {
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

//login in the user
router.get('/',async (req, res) => {
    const {username,password}=req.body
    try{
        const user = await UserModel.findOne({username: username})

        if(user)
        {
            const validity = await user.compare(password, user.password)

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
    const userid = Number(req.params.userid) 
    db.user.findOne({ where: { userid: userid } })
        .then(data => {
            if (data) {
                return db.user.destroy({ where: { userid: userid} }).then(r => [r, data])
            }
            throw new RequestError('User is not found', 409)
        })
        .then(re => {
            return res.status(200).json({ 'status': "Successfully deleted user" });
        }).catch(err => {
            next(err)
        })
})

