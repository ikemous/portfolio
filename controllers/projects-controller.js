const db = require("../models/index.js");

module.exports={
    findAll(req, res)
    {
        db.Project.find({})
        .then(collections => res.json(collections))
        .catch(error => res.status(422).json(error));
    },
    findByFilter({params}, res)
    {
        db.Project.find({skills: { $regex: params.filter }})
        .then(collection => res.json(collection))
        .catch(error => res.status(422).jso4n(err));
    }
};
