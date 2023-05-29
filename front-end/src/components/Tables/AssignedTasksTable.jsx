import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TaskService from '../../services/TaskService'
import SprintService from '../../services/SprintService';
import './taskTable.css'

const AssignedTasksTable = ({ sprintId, token, handleUnassign, openChangeStatusModal, openAddTimeSpentModal }) => {

    const [sprintTasks, setSprintTasks] = useState([]);

    useEffect(() => {
        console.log(sprintId)
        if (sprintId > 0) {
            SprintService.getSprintTasks(sprintId, token).then((response) => setSprintTasks(response.data))
        }
    }, [sprintId, token])

    const columns = [

        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Content",
            selector: (row) => row.content,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Time Spent (hour)",
            selector: (row) => row.duration,
        },
        {
            name: "Story Point",
            selector: (row) => row.storyPoint,
        },
        {
            name: "Start Date",
            selector: (row) => row.startDate,
        },
        {
            name: "Assigned User",
            selector: (row) => (row.user !== null) ? (row.user.name + " " + row.user.surname) : "Not assigned"
        },
        {
            name: "",
            cell: (row) =>
                <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => handleUnassign(row.taskId)}>Unassign Task</button>

        },
        {
            name: "",
            cell: (row) =>
                <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => openChangeStatusModal(row.taskId, row.status)} >Change Status</button>

        },
        {
            name: "",
            cell: (row) =>
                <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => openAddTimeSpentModal(row.taskId)} >Add Time Spent</button>

        },
    ]

    return (

        <DataTable
            columns={columns}
            data={sprintTasks}
            pagination />
    )
}

export default AssignedTasksTable