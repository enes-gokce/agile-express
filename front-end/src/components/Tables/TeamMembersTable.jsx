import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TeamService from '../../services/TeamService';
import './taskTable.css'

const TeamMembersTable = ({ handleUnassign, handleChangeRole, teamId, token }) => {

    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {

        TeamService.getTeamMembers(teamId, token).then((response) => setTeamMembers(response.data));

    }, [])


    const columns = [
        {
            name: "Username",
            selector: (row) => row.username,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Surname",
            selector: (row) => row.surname,
        },
        {
            name: "Role",
            selector: (row) => row.role,
        },
        {
            name: "",
            cell: (row) =>
                <span><button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => handleUnassign(row.username)}>Unassign Member</button>
                    <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => handleChangeRole(row.username)}>Change Role</button></span>
        },
    ]


    return (
        <DataTable
            columns={columns}
            data={teamMembers}
            pagination />
    )
}

export default TeamMembersTable