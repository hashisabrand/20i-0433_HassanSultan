const PropertyModel = require("../Models/PropertyModel");

let getAllProperty = (req, res) => {
    PropertyModel.find({})
    .then(properties => {
        res.status(200).json({ Success: true, Message: "Succefully got properties", Properties:properties });
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get properties", err:err });
    })
}

let getByNameProperty = (req, res) => {

    let {Title} = req.body;

    let filter = {Title: Title};

    PropertyModel.find(filter)
    .then(property => {
        if(property.length !== 0){
            res.status(200).json({ Success: true, Message: "Succefully got property", property:property });
        }
        else
        {
            res.status(400).json({ Success: false, Message: "No such property exist in db"});
        }
        
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get property",err:err });
    })
}

module.exports = {
    getAllProperty,
    getByNameProperty,
}