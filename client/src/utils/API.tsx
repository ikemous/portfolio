import axios from "axios";

export default {
    getProjects(filter:string) {
        if(filter === "") return axios.get("/projects");
        console.log("filter")
        return axios.get(`/projects/${filter}`)
    },
};