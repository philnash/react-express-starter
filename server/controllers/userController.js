const router = require("express").Router();
const Sequelize = require("sequelize");

const {
  User,
} = require("../db/models/user", Sequelize.DataTypes);

const connect = require("../db/config/database");
// const { DataTypes, Model } = require(Sequelize)

const { db } = require("sequelize");
// const { User } = db.user

//Middleware
const bcrypt = require("bcrypt");
const jwt = require("json-web-token");
// const { hashSync } = require ('bcrypt')
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
    // res.json(users);
  });
});

router.get("/users", async (req, res) => {
  try {
    // Use the findAll() function to fetch all users
    const users = await connect.db.User.findAll();
    res.json(users);
    console.log(typeof users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
});

//addUser
router.post("/createuser", (req, res) => {
  // const hashedpassword = bcrypt.hashSync(password);
  const { username, firstname, lastname, email, passwordDigest } = req.body;
  console.log(typeof req.body);
  // let passwordDigest = await bcrypt.hash(passwordDigest, 10);

  // const user =
  const user = User.create(
    {
      userrole: "Customer",
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      passwordDigest: passwordDigest,
      // await bcrypt.hash(passwordDigest, 10)
    },
    {
      fields: ["username", "firstname", "lastname", "email", "passwordDigenst"],
    }
  );
  res
    .json(user)
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("./createuser", { message });
      } else {
        res.render("error404");
      }
    });
});

//Find users
router.get("/findusers", async (req, res) => {
  User.findOne({
    attributes: ["username", "firstname", "lastname"],
    where: { email: req.query.email },
    paranoid: false,
  })
    .then((users) => {
      if (users) {
        return res.status(200).json({ success: true, data: users });
      } else res.status(500).json({ success: false });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

//Update user info
router.put("/:id", async (req, res) => {
  const { username, firstName, lastName, email, passwordDigest } = req.body;
  // let passwordHash = hashSync(password);
  User.findOne({
    where: { email: email },
    paranoid: false,
  });
  if (
    !User ||
    !(await bcrypt.compare(req.body.password, User.passwordDigest))
  ) {
    res
      .status(404)
      .json({
        message: `Could not find a User with the provided email and password`,
      });
    return User.update(
      {
        username: username ? username : User.username,
        firstName: firstName ? firstName : User.firstName,
        lastName: lastName ? lastName : User.lastName,
        passwordDigest: passwordDigest ? passwordDigest : User.passwordDigest,
      },
      { where: { email: email } }
    );
  }
});

// login in the user
router.get("/login", async (req, res) => {
  const { email, passwordDigest } = req.body;
  const foundUser = await User.findOne({ email: email });
  const validity = await foundUser.compare(
    passwordDigest,
    foundUser.passwordDigest
  );

  if (foundUser) {
    if (!foundUser || !(await validity)) {
      // bcrypt.compare(passwordDigest, user.passwordDigest))
      res
        .status(404)
        .json({
          message: `Could not find a user with the provided username and password`,
        });
    } else {
      const result = await jwt.encode(process.env.JWT_SECRET, {
        id: foundUser.id,
      });
      res.json({ user: foundUser, token: result.value }).then((products) => {
        console.log(foundUser);
        res.render(`./products`), { products };
      });
    }
  }
});

//Delete user
router.delete("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  User.findOne({ where: { id: id } })
    .then((data) => {
      if (data) {
        return User.destroy({ where: { id: id } }).then((r) => [r, data]);
      }
      throw new RequestError("User is not found", 409);
    })
    .then((res) => {
      return res.status(200).json({ status: "Successfully deleted user" });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
