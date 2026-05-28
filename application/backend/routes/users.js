const express = require("express");
const router = express.Router();
const UserModel = require('../models/Users.js')
const UserError = require('../helpers/error/UserError.js')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/register", (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  UserModel.doesEmailExist(email)
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError(
          "Registration Failed: Account already exists",
          "http://localhost:3000/",
          200
        );
      } else {
        return UserModel.create(email, password);
      }
    })
    .then((createdUserId) => {
      if (createdUserId > 0) {
        req.session.userId = createdUserId;
        res.locals.logged = true;
        console.log("Create user success");
        res.status(200).send("Create user success");
      } else {
        throw new UserError(
          "Server Error, user could not be created",
          "/registration",
          500
        );
      }
    })
    .catch((err) => {
      if (err instanceof UserError) {
        console.log(err.getMessage());
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});

router.post("/login", (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  UserModel.doesEmailExist(email)
    .then((usernameDoesExist) => {
      if (usernameDoesExist) {
        return UserModel.authenticate(email, password);
      } else {
        throw new UserError(
          "Login Failed: Email does not exist",
          "http://localhost:3000/",
          200
        );
      }
    })
    .then((userId) => {
      if (userId > 0) {
        req.session.userId = userId;
        console.log(req.session.userId)
        res.locals.logged = true;
        console.log("Login Successful");
        res.status(200).send("Login Successful");
      } else {
        throw new UserError(
          "Login Failed: Incorrect Password",
          "http://localhost:3000/",
          200
        );
      }
    })
    .catch((err) => {
      if (err instanceof UserError) {
        console.log(err.getMessage());
        res.status(err.getStatus());
        res.send(err.getMessage());
      } else {
        next(err);
      }
    });
});



module.exports = router;
