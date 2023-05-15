const HousingSchemeModel = require("../Models/ProjectProductModel");

let getAllHousingScheme = (req, res) => {
    HousingSchemeModel.find({})
    .then(HousingSchemes => {
        res.status(200).json({ Success: true, Message: "Succefully got HousingScheme users", HousingSchemes:HousingSchemes });
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get HousingScheme users",err:err });
    })
}
let getByNameHousingScheme = (req, res) => {

    let {Title} = req.body;

    let filter = {Title: Title};

    HousingSchemeModel.find(filter)
    .then(product => {
        if(product.length !== 0){
            res.status(200).json({ Success: true, Message: "Succefully got project users", product:product });
        }
        else{
            res.status(400).json({ Success: false, Message: "No such product exist in the db" });
        }
        
    })
    .catch(err => {
        res.status(400).json({ Success: false, Message: "Could not get project users",err:err });
    })
}






module.exports = {
    getAllHousingScheme,
    getByNameHousingScheme,
}