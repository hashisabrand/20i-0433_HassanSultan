const { getAllAgent, getByNameAgent } = require("../Controllers/Client.Agent.Controller");

const ClientAgentRouter = require("express").Router();


ClientAgentRouter.get("/getAllAgent", getAllAgent);

ClientAgentRouter.post("/getByNameAgent", getByNameAgent);

module.exports = ClientAgentRouter;

