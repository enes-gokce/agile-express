import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TaskService from '../../services/TaskService'
import './taskTable.css'

const BacklogTasksTable = ({ handleTaskDelete, openAssignTaskUserModal, openAssignTaskSprintModal, openUpdateTaskModal, inputBacklog }) => {

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
            name: "Assigned Sprint",
            selector: (row) => (row.sprint !== null) ? (row.sprint.title) : "Not assigned"
        },
        {
            name: "Assign Task",
            cell: (row) =>
                <span><button className="btn-assign-user btn btn-outline-dark btn-sm" onClick={() => openAssignTaskUserModal(row.taskId)}>To User</button>
                    <button className="btn-assign-sprint btn btn-outline-dark btn-sm" onClick={() => openAssignTaskSprintModal(row.taskId)}>To Sprint</button></span>
        },
        {
            name: "",
            selector: (row) => <span><button className="btn btn-outline-dark btn-sm" onClick={() => openUpdateTaskModal(row)} >Edit</button>
                <button className="btn btn-outline-dark btn-sm ms-2" onClick={() => handleTaskDelete(row.taskId)}>🗑️</button></span>,
        },
    ]

    return (

        <DataTable
            columns={columns}
            data={inputBacklog}
            pagination />
    )
}

export default BacklogTasksTable
