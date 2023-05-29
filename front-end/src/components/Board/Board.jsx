import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectService from '../../services/ProjectService.js'
import TaskService from '../../services/TaskService'
import UserService from '../../services/UserService.js';
import TeamService from '../../services/TeamService';
import UnassignedMembers from '../Member/UnassignedMembers.jsx';
import BacklogTask from '../Task/BacklogTask'
import './board.css'
import Team from '../Team/Team.jsx';
import Sprint from '../Sprint/Sprint.jsx';
import SprintService from '../../services/SprintService.js';

function Board({ token }) {

    let { id } = useParams();

    const [unassignedMembers, setUnassignedMembers] = useState([]);
    const [project, setProject] = useState({});
    const [backlog, setBacklog] = useState([]);
    const [teams, setTeams] = useState([]);
    const [inactiveSprints, setInactiveSprints] = useState([]);
    const [activeSprint, setActiveSprint] = useState({});

    useEffect(() => {
        SprintService.getAllInactiveSprints(id, token).then((response) => setInactiveSprints(response.data))
    }, [token, id])

    useEffect(() => {
        SprintService.getActiveSprint(id, token).then((response) => setActiveSprint(response.data))
    }, [token, id])

    useEffect(() => {
        TeamService.getAllTeams(id, token).then((response) => setTeams(response.data));
    }, [token, id])

    useEffect(() => {
        UserService.getUnassignedMembers(token).then((response) => { setUnassignedMembers(response.data) });
    }, [token, id])

    useEffect(() => {
        TaskService.getBacklogTasks(id, token).then((response) => { setBacklog(response.data) });
    }, [token, id])

    useEffect(() => {
        ProjectService.getProject(id, token).then((response) => { setProject(response.data) });
    }, [token, id])

    return (
        <React.Fragment>
            <div className="Board">
                <div className="board-container">
                    <h3>This is the board of the {project.title}</h3>
                    <div className="board-sprint">
                        <Sprint projectId={id} token={token} inactiveSprints={inactiveSprints} activeSprint={activeSprint} />
                    </div>
                    <div className="board-teams">
                        <Team teams={teams} projectId={id} token={token} />

                    </div>
                    <div className="board-members">
                        <UnassignedMembers id={id} token={token} unassignedMembers={unassignedMembers} />
                    </div>
                    <hr />
                    <div className="board-tasks">
                        <h4>Tasks</h4>
                        <div className="backlog-tasks">
                            <BacklogTask id={id} token={token} backlog={backlog} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Board;