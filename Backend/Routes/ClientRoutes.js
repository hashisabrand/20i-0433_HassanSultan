const {verifyuserloggedIn} = require('../authentication')
const {
  signup,
  login,
  updateclient,
} = require("../Controllers/ClientController.js");
const ClientRouter = require("express").Router();

ClientRouter.post("/signup", signup);
ClientRouter.post("/login", login);
ClientRouter.post("/update", verifyuserloggedIn,updateclient);
module.exports = ClientRouter;
// {
   
//   "name" : "Yashjhhjl",
//   "email" : "Yashl@mjhhhjonal.com",
//   "contactNo": "911kjjkk",
//   "password" : "12vjhhj3456",
//   "address": "Khalo ke kjjkkjkj"
//   }