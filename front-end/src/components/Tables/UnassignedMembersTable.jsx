import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import './taskTable.css'

const UnassignedMembersTable = ({ inputMembers, openAssignUserTeamModal }) => {

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
                <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => openAssignUserTeamModal(row.username)}>Assign Member to Team</button>
        },
    ]


    return (
        <DataTable
            columns={columns}
            data={inputMembers}
            pagination />
    )
}

export default UnassignedMembersTable