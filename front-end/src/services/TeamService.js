import axios from 'axios'

const get_all_teams_url = 'http://localhost:8080/api/team/view/all/'
const get_team_members_url = 'http://localhost:8080/api/team/members/'
const post_team_url = 'http://localhost:8080/api/team/create/'
const delete_team_url = 'http://localhost:8080/api/team/delete/'
const update_team_url = 'http://localhost:8080/api/team/update/'

class TeamService {

    getAllTeams(projectId, token){
        return axios.get(get_all_teams_url+projectId, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    getTeamMembers(teamId, token){
        return axios.get(get_team_members_url+teamId, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    createTeam(inputTeam, projectId, token){
        console.log(JSON.stringify(inputTeam), projectId, token)
        axios.post(post_team_url+projectId, {
            title: inputTeam.title,
            content: inputTeam.content
        }, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    deleteTeam(teamId, token){
        axios.delete(delete_team_url+teamId, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    updateTeam(teamId, updatedTeam, token){
        axios.put(update_team_url+teamId, {
            title: (updatedTeam.title === "" ? null : updatedTeam.title),
            content: (updatedTeam.content === "" ? null : updatedTeam.content)
        }, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

}

export default new TeamService();