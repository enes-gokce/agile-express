import axios from 'axios'

const get_project_url = 'http://localhost:8080/api/project/view/';
const get_all_projects_url = 'http://localhost:8080/api/project/view/all';
const post_project_url = 'http://localhost:8080/api/project/create'
const update_project_url = 'http://localhost:8080/api/project/update/'
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
        axios.post(post_project_url, {
            title: tempProject.title,
            content: tempProject.content,
            startDate: tempProject.startDate,
            finishDate: tempProject.finishDate
        }, 
        {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    updateProject(projectId, updatedProject, token){
        axios.put(update_project_url+projectId, {
            title: (updatedProject.title === "" ? null : updatedProject.title),
            content: (updatedProject.content === "" ? null : updatedProject.content),
            startDate: (updatedProject.startDate === "" ? null : updatedProject.startDate),
            finishDate: (updatedProject.finishDate === "" ? null : updatedProject.finishDate)
        }, {
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