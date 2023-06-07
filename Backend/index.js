const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const Clientrouter = require("./Routes/ClientRoutes.js");
const ClientPropertyRouter = require("./Routes/Client.Property.Routes.js")
const cors = require("cors");
const ClientAgentRouter = require("./Routes/Client.Agent.Routes.js");
const ClientHousingSchemeRouter = require("./Routes/Client.HousingScheme.Routes.js")
const path = require("path");


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.get("/getfile", (req, res) => {
  const filePath = path.join(__dirname, 'public', req.query.file);
  res.download(filePath, (err) => {
    if (err) {
      console.log("Error downloading file:", err);
      // Handle error, such as sending an error response to the client
      res.status(500).send("Error downloading file");
    }
  });
});



app.listen(process.env.PORT || 3000, () => {
  console.log("Appp listening on port 3000");
});
