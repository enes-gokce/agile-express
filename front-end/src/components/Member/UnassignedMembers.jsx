import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService'
import AssignUserTeamModal from '../Modal/AssignUserTeamModal';
import UnassignedMembersTable from '../Tables/UnassignedMembersTable'

function UnassignedMembers({ id, token, unassignedMembers }) {

    const [showAssignUserTeamModal, setShowAssignUserTeamModal] = useState(false);

    const [tempUserName, setTempUserName] = useState("");

    const openAssignUserTeamModal = tempUserName => {
        setShowAssignUserTeamModal(true);
        setTempUserName(tempUserName);
    }

    const handleAssignUserToTeam = (teamId) => {
        UserService.assignUser(tempUserName, teamId, token)
        window.location.reload();
    }

    return (
        <React.Fragment>
            <h4>Unassigned Members</h4>
            {showAssignUserTeamModal ? <AssignUserTeamModal handleAssignUserToTeam={handleAssignUserToTeam} setShowAssignUserTeamModal={setShowAssignUserTeamModal} /> : null}
            <UnassignedMembersTable inputMembers={unassignedMembers} openAssignUserTeamModal={openAssignUserTeamModal} />
        </React.Fragment>
    )
}

export default UnassignedMembers