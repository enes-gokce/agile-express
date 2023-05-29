import axios from 'axios'

const post_sprint_url = 'http://localhost:8080/api/sprint/create/'
const get_all_inactive_sprints_url = 'http://localhost:8080/api/sprint/view/inactive/all/'
const get_active_sprint_url = 'http://localhost:8080/api/sprint/view/active/'
const get_sprint_tasks_url = 'http://localhost:8080/api/sprint/view/'
const activate_sprint_url =  'http://localhost:8080/api/sprint/activate/'
const inactivate_sprint_url =  'http://localhost:8080/api/sprint/inactivate/'

class SprintService {

    postSprint(projectId, inputSprint, token){
        axios.post(post_sprint_url+projectId, {

            title: inputSprint.title,
            content: inputSprint.content,
            startDate: inputSprint.startDate,
            finishDate: inputSprint.finishDate

        }, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    getAllInactiveSprints(projectId, token){
        return axios.get(get_all_inactive_sprints_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    getActiveSprint(projectId, token){
        return axios.get(get_active_sprint_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`},
        })
    }

    getSprintTasks(sprintId, token){
        return axios.get(get_sprint_tasks_url+sprintId+'/tasks', {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    activateSprint(sprintId, token){
        axios.put(activate_sprint_url+sprintId, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    inactivateSprint(sprintId, token){
        axios.put(inactivate_sprint_url+sprintId, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

}

export default new SprintService();