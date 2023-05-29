import React, { useState, useEffect } from 'react'
import TeamService from '../../services/TeamService';
import UserService from '../../services/UserService';
import TeamModal from '../Modal/TeamModal';
import UpdateTeamModal from '../Modal/UpdateTeamModal';
import TeamMembersTable from '../Tables/TeamMembersTable';

function Team({ teams, projectId, token }) {

    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showUpdateTeamModal, setShowUpdateTeamModal] = useState(false);

    const openTeamModal = () => {
        setShowTeamModal(true);
    }

    const openUpdateTeamModal = () => {
        setShowUpdateTeamModal(true);
    }

    const handleAddTeam = inputTeam => {

        setShowTeamModal(false);
        TeamService.createTeam(inputTeam, projectId, token);
        window.location.reload();
    }

    const handleUnassign = username => {
        UserService.unassignUser(username, token);
        window.location.reload();
    }

    const handleChangeRole = username => {
        UserService.changeRole(username, token)
        window.location.reload();
    }

    const handleTeamDelete = teamId => {
        TeamService.deleteTeam(teamId, token);
        window.location.reload();
    }

    const handleUpdateTeam = updatedTeam => {
        setShowUpdateTeamModal(false)
        TeamService.updateTeam(updatedTeam.id, updatedTeam, token);
        window.location.reload();
    }

    return (
        <React.Fragment>
            <div><h4>Teams <button type="button" className="create btn btn-dark btn-sm" onClick={openTeamModal}>Create Team</button></h4></div>
            {showTeamModal ? <TeamModal addTeam={handleAddTeam} setShowTeamModal={setShowTeamModal} /> : null}
            <hr />
            <div>
                {teams.map(team =>
                    <div key={team.teamId}>
                        <h5>Team ID: {team.teamId} | {team.title} | {team.content} <button className="btn btn-outline-dark btn-sm ms-2" onClick={() => handleTeamDelete(team.teamId)}>🗑️</button>
                            <button className="btn btn-outline-dark btn-sm ms-2" onClick={openUpdateTeamModal}>Edit</button></h5>
                        {showUpdateTeamModal ? <UpdateTeamModal inputTeamId={team.teamId} inputTitle={team.title} inputContent={team.content} updateTeam={handleUpdateTeam} setShowUpdateTeamModal={setShowUpdateTeamModal} /> : null}
                        <TeamMembersTable handleUnassign={handleUnassign} handleChangeRole={handleChangeRole} teamId={team.teamId} token={token} />
                    </div>
                )}
            </div>
            <hr />
        </React.Fragment>
    )
}

export default Team
