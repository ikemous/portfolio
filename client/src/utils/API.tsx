import axios from "axios";

export default {
    getProjects() {
        return axios.get("/projects");
    },
    getFilteredProjects(filter:string) {
        return axios.get(`/projects/:${filter}`)
    },
};