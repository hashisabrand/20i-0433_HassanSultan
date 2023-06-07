const { getAllProperty, getByNameProperty } = require("../Controllers/Client.Property.Controller");

const ClientPropertyRouter = require("express").Router();


ClientPropertyRouter.get("/getAllProperty", getAllProperty);

ClientPropertyRouter.post("/getByNameProperty",getByNameProperty);

module.exports = ClientPropertyRouter;

