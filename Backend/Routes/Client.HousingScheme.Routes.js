const { getAllHousingScheme, getByNameHousingScheme } = require("../Controllers/Client.HousingScheme.Controller");

const ClientHousingSchemeRouter = require("express").Router();


ClientHousingSchemeRouter.get("/getAllHousingScheme", getAllHousingScheme);

ClientHousingSchemeRouter.post("/getByNameHousingScheme", getByNameHousingScheme);

module.exports = ClientHousingSchemeRouter;

