const Client = require("../Models/ClientModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
let signup = (req, res) => {
  let { name, email, contactNo,address, password } = req.body;
  let client = new Client({
    name,
    email,
    contactNo,
    address,
    password,
  });
  client
    .save()
    .then((client) => {
      res
        .status(200)
        .json({ message: "Client Successfully Created", client: client });
    })
    .catch((err) => {
      res.status(400).json({ error: err, message: "Client not Created" });
    });
};
let getByEmailClient = (req, res) => {

  let {email} = req.body;
  console.log(email)
  let filter = {email: email};

  Client.find(filter)
  .then(Client => {
      res.status(200).json({ Success: true, Message: "Succefully got agent", Client:Client });
  })
  .catch(err => {
      res.status(400).json({ Success: false, Message: "Could not get agent",err:err });
  })
}


let updateclient = (req, res) => {
  let { email,name, address,contactNo } = req.body;
  let filter = { email: email };
  let update = {
    name: name,
    address: address,
    contactNo: contactNo,
  };


 


  Client.updateOne(filter, update)
    .then((client) => {
      res
        .status(200)
        .json({ message: "Client Successfully updated", client: client });
    })
    .catch((err) => {
      res.status(400).json({ error: err, message: "Client not Update" });
    });
};

let login = (req, res) => {
  let { email, password } = req.body;

  Client.findOne({ email: email }).then((client) => {
    if (!client) {
      res.status(400).json("user not found");
    } else {
      if (client.password == password) {
        let token = jwt.sign(
          {
            id: client._id,
            role: client.role,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "24h",
          }
        );
        res.status(200).json({ client: client, token: token });
      } else {
        res.status(400).json("password incorrect");
      }
    }
  });
};
module.exports = {
  signup,
  login,
  getByEmailClient,
  updateclient,
};
