const {verifyuserloggedIn} = require('../authentication')
const {
  signup,
  login,
  getByEmailClient,
  updateclient,
} = require("../Controllers/ClientController.js");
const ClientRouter = require("express").Router();

ClientRouter.post("/signup", signup);
ClientRouter.post("/login", login);
ClientRouter.post("/getclient", getByEmailClient);
ClientRouter.post("/update",updateclient);
module.exports = ClientRouter;
