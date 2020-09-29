const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateObj = {
    type: Date,
    default: Date.now()
}
const stringObj = {
    type: String,
    trim: true
}

const ProjectSchema = new Schema(
    {
        createdDate: dateObj,
        updatedDate: dateObj,
        title: stringObj,
        description: stringObj,
        skills: stringObj,
        imageRoute: stringObj,
        githubURL: stringObj,
        deployedURL: stringObj
    }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;