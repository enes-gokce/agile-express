import axios from 'axios'

const authenticate_url = 'http://localhost:8080/authenticate';
const get_user_url = 'http://localhost:8080/api/user/get'
const get_unassigned_users_url = 'http://localhost:8080/api/user/get/unassigned'
const unassing_user_url = 'http://localhost:8080/api/user/unassign/'
const assing_user_url = 'http://localhost:8080/api/user/assign/'
const change_role_url = 'http://localhost:8080/api/user/changeRole/'

class UserService {

    authenticate(username, password){
        return axios.post(authenticate_url, {
            username: username,
            password: password
        })
    }

    getUser(token){
        console.log(`Bearer ${token}`);
        return axios.get(get_user_url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    getUnassignedMembers(token){
        console.log(`Bearer ${token}`);
        return axios.get(get_unassigned_users_url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    unassignUser(username, token){
        axios.put(unassing_user_url+username, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    assignUser(username, teamId, token){
        axios.put(assing_user_url+username+'/team/'+teamId, {},{
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    changeRole(username, token){
        axios.put(change_role_url+username, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

}

export default new UserService();