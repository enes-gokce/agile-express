import axios from 'axios'

const get_backlog_tasks_url = 'http://localhost:8080/api/task/view/backlog/'
const post_task_url = 'http://localhost:8080/api/task/create/'
const assign_task_to_url = 'http://localhost:8080/api/task/assign/'
const unassign_task_sprint_url = 'http://localhost:8080/api/task/unassign/sprint/'
const delete_task_url = 'http://localhost:8080/api/task/delete/'
const update_task_url = 'http://localhost:8080/api/task/update/'
const search_task_url = 'http://localhost:8080/api/task/search/'

class TaskService {

    getBacklogTasks(projectId, token){
        return axios.get(get_backlog_tasks_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    postTask(tempTask, projectId, token){
        console.log(`Bearer ${token}`);
        console.log(JSON.stringify(tempTask));
        axios.post(post_task_url+projectId, {
            title: tempTask.title,
            content: tempTask.content,
            duration: tempTask.duration,
            storyPoint: tempTask.storyPoint,
            startDate: tempTask.startDate
        }, {
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}
        })
    }

    updateTask(taskId, updatedTask, token){
        axios.put(update_task_url+taskId, {
            title: (updatedTask.title === "" ? null : updatedTask.title),
            content: (updatedTask.content === "" ? null : updatedTask.content),
            status: (updatedTask.status === "" ? null : updatedTask.status),
            duration: (updatedTask.duration === "" ? null : updatedTask.duration),
            storyPoint: (updatedTask.storyPoint === "" ? null : updatedTask.storyPoint),
            startDate: (updatedTask.startDate === "" ? null : updatedTask.startDate)
        }, {
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}
        })
    }

    assignTasktoUser(taskId, username, token){
        console.log(taskId, username);
        axios.put(assign_task_to_url+taskId+'/user/'+username, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    assignTasktoSprint(taskId, sprintId, token){
        console.log(taskId, sprintId);
        axios.put(assign_task_to_url+taskId+'/sprint/'+sprintId, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    unassignTasktoSprint(taskId, token){
        axios.put(unassign_task_sprint_url+taskId, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    deleteTask(taskId, token){
        axios.delete(delete_task_url+taskId, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    searchTask(query, token){
        return axios.get(search_task_url+query, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
}

export default new TaskService();