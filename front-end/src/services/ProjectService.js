import axios from 'axios'

const get_project_url = 'http://localhost:8080/api/project/view/';
const get_all_projects_url = 'http://localhost:8080/api/project/view/all';
const post_project_url = 'http://localhost:8080/api/project/create'
const delete_project_url = 'http://localhost:8080/api/project/delete/'

class ProjectService {

    getProject(projectId, token){
        return axios.get(get_project_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }
    getAllProjects(token){
        return axios.get(get_all_projects_url, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    postProject(tempProject, token){
        console.log(`Bearer ${token}`);
        console.log(JSON.stringify(tempProject));
        axios.post(post_project_url, {
            title: tempProject.title,
            content: tempProject.content,
            startDate: tempProject.startDate
        }, 
        {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    deleteProject(projectId, token){
        axios.delete(delete_project_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }
}

export default new ProjectService();