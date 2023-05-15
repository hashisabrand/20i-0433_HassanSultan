const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const Clientrouter = require("./Routes/ClientRoutes.js");
const ClientPropertyRouter = require("./Routes/Client.Property.Routes.js")
const cors = require("cors");
const ClientAgentRouter = require("./Routes/Client.Agent.Routes.js");
const ClientHousingSchemeRouter = require("./Routes/Client.HousingScheme.Routes.js")



app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use("/client", Clientrouter);
app.use("/clientagent",ClientAgentRouter)
app.use("/clienthscheme",ClientHousingSchemeRouter)
app.use("/clientppt",ClientPropertyRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("Appp listening on port 3000");
});
