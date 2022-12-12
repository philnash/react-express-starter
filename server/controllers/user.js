import bcrypt from 'bcrypt-nodejs';
import {db} from '../models'


var JWTSign = function (user, date) {
    return JWT.sign({
        iss: config.app.name,
        sub: user.id,
        iam : user.type,
        iat: date.getTime(),
        exp: new Date().setMinutes(date.getMinutes() + 30)
    }, config.app.secret);
}
    export default {
        //addUser
        async addUser(req, res, next) {
            const { firstName, lastName, email, streetaddress, password,  } = req.body;
            var passwordHash = bcrypt.hashSync(password);
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
        },

        //Find users
        async findUser(req, res, next) {
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
        },

        //Update user info
        async userUpdate(req, res, next) {
            const { id, firstName, lastName, email, streetaddress, password, } = req.body;
            var passwordHash = bcrypt.hashSync(password);
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
                    }, { where: { id: id } })

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
        },

        //login in the user
        async login(req, res, next) {
            var date = new Date();
            var token = JWTSign(req.user, date);
            res.cookie('XSRF-token',     token, {
                expire: new Date().setMinutes(date.getMinutes() + 30),
                httpOnly: true, secure: config.app.secure
            });

            return res.status(200).json({ success: true ,token,role: req.user.role});
        },

        //Delete user 
        async deleteUserList(req, res, next) {
            db.user.findOne({ where: { id: req.body.id} })
                .then(data => {
                    if (data) {
                        return db.user.destroy({ where: { id: req.body.id } }).then(r => [r, data])
                    }
                    throw new RequestError('User is not found', 409)
                })
                .then(re => {
                    return res.status(200).json({ 'status': "deleted userlist Seccessfully" });
                }).catch(err => {
                    next(err)
                })
        },
    }