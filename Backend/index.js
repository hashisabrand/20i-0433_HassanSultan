const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const Clientrouter = require("./Routes/ClientRoutes.js");
const ClientPropertyRouter = require("./Routes/Client.Property.Routes.js");
const cors = require('cors');
const ClientAgentRouter = require("./Routes/Client.Agent.Routes.js");
const ClientHousingSchemeRouter = require("./Routes/Client.HousingScheme.Routes.js");
const path = require("path");
const InsurancePlan = require('./Models/InsurancePlan.js');
const Stripe = require('stripe');

const stripe = Stripe("sk_test_51N5kR5AHUmt4BX2ALHEIaPt3qVApc9lvRchE0NDu14VT3YMtdJIvfdIhoXI4gieXvjWx48rQKnHS1mENuMjYyiEF00GQY2PWlJ");
app.use(cors());
app.post('/payment/createpayment', async (req, res) => {
  try {
    const { token, amount } = req.body;
    console.log(token);
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
      transfer_data: {
       
      },
    });

    res.send('Success');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed');
  }
});




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
app.use("/clientagent", ClientAgentRouter);
app.use("/clienthscheme", ClientHousingSchemeRouter);
app.use("/clientppt", ClientPropertyRouter);

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

app.get("/get-plans", async (req, res) => {
  try {
    const insurancePlan = await InsurancePlan.find();
    res.json(insurancePlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.use(express.static(path.join(__dirname, "../Frontend/my-app/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../Frontend/my-app/build"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App listening on port 3000");
});
