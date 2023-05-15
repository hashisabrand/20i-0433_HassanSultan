const AgentModel = require("../Models/AgentModel");

let getAllAgent = (req, res) => {
    AgentModel.find({})
    .then(agents => {
        res.status(200).json({ Success: true, Message: "Succefully got agent users", Agents:agents });
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get agent users",err:err });
    })
}

let getByNameAgent = (req, res) => {

    let {fname} = req.body;

    let filter = {fname: fname};

    AgentModel.find(filter)
    .then(agent => {
        res.status(200).json({ Success: true, Message: "Succefully got agent", agent:agent });
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get agent",err:err });
    })
}





module.exports = {
    getAllAgent,
    getByNameAgent,
}