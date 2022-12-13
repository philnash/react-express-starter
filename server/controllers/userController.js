import bcrypt from 'bcrypt-nodejs';
import { db } from '../models'
const router = require('express').Router()
const cookie = require('cookie')
const { User } = db




//addUser
router.post('/', async (req, res) => {
    const { firstName, lastName, email, streetaddress, password, } = req.body;
    let passwordHash = bcrypt.hashSync(password);
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(find => {
            if (find) {
                throw new RequestError('Email is already in use', 409);
            }
            return db.user.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                steetaddress: streetaddress,
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

//Find users
router.get('/', async (req, res) => {
    db.user.findOne({ attributes: ["firstName", "lastName"], where: { email: req.query.email }, paranoid: false })
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
router.put('/:id', async (req, res) => {
   
    const { userId, firstName, lastName, email, streetaddress, password, } = req.body;
    let passwordHash = bcrypt.hashSync(password);
    db.user.findOne({ where: { email: email }, paranoid: false })
        .then(user => {
            if (!user) {
                throw new RequestError('User is not found', 409);
            }
            return db.user.update({
                firstName: firstName ? firstName : user.firstName,
                lastName: lastName ? lastName : user.lastName,
                userpassword: userpassword ? passwordHash : user.passwordHash,
                streetaddress: streetaddress ? streetaddress : user.streetaddress,
            }, { where: { userId: userId } })

        })
        .then(user => {
            if (user) {
                return res.status(200).json({ success: true, msg: "User update successsfully" });
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
router.delete('/:userId', async (req, res, next) => {
    const userId = Number(req.params.userId) 
    db.user.findOne({ where: { userId: userId } })
        .then(data => {
            if (data) {
                return db.user.destroy({ where: { userId: userId} }).then(r => [r, data])
            }
            throw new RequestError('User is not found', 409)
        })
        .then(re => {
            return res.status(200).json({ 'status': "deleted userlist Seccessfully" });
        }).catch(err => {
            next(err)
        })
})

