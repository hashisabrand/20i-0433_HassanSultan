const { getAllAgent, getByNameAgent ,getByIDAgent} = require("../Controllers/Client.Agent.Controller");

const ClientAgentRouter = require("express").Router();


ClientAgentRouter.get("/getAllAgent", getAllAgent);

ClientAgentRouter.post("/getByNameAgent", getByNameAgent);
ClientAgentRouter.post("/getByIDAgent", getByIDAgent);


module.exports = ClientAgentRouter;

