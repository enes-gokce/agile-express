import React, { useState, useEffect } from 'react'
import TaskService from '../../services/TaskService'
import BacklogTasksTable from '../Tables/BacklogTasksTable'
import TaskModal from '../Modal/TaskModal.jsx'
import UpdateTaskModal from '../Modal/UpdateTaskModal'
import AssignTaskUserModal from '../Modal/AssignTaskUserModal';
import AssignTaskSprintModal from '../Modal/AssignTaskSprintModal'

function BacklogTask({ id, token, backlog }) {

    const [showTaskModal, setShowTaskModal] = useState(false);

    const [tempTaskId_1, setTempTaskId_1] = useState("");
    const [tempTaskId_2, setTempTaskId_2] = useState("");

    const [showAssignTaskUserModal, setShowAssignTaskUserModal] = useState(false);

    const [showAssignTaskSprintModal, setShowAssignTaskSprintModal] = useState(false);

    const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);

    const [tempTask, setTempTask] = useState();

    const openUpdateTaskModal = inputTask => {
        setTempTask(inputTask);
        setShowUpdateTaskModal(true);
    }

    const openAssignTaskUserModal = inputTaskId => {
        setShowAssignTaskUserModal(true);
        setTempTaskId_1(inputTaskId);
    }

    const openAssignTaskSprintModal = inputTaskId => {
        setShowAssignTaskSprintModal(true);
        setTempTaskId_2(inputTaskId);
    }

    const openTaskModal = () => {
        setShowTaskModal(true);
    }

    const handleTaskAdd = inputTask => {
        let tempTask = {
            title: inputTask.title,
            content: inputTask.content,
            status: (inputTask.status === null) ? "To-do" : inputTask.status,
            duration: inputTask.duration,
            storyPoint: inputTask.storyPoint,
            startDate: inputTask.startDate
        }
        setShowTaskModal(false);
        TaskService.postTask(tempTask, id, token);
        window.location.reload();
    }

    const handleTaskUpdate = updatedTask => {
        console.log(updatedTask)
        TaskService.updateTask(updatedTask.taskId, updatedTask, token);
        window.location.reload();
    }

    const handleTaskDelete = taskId => {
        console.log(taskId);
        TaskService.deleteTask(taskId, token);
        window.location.reload();
    }

    const handleAssignTaskToUser = username => {
        console.log(tempTaskId_1, username)
        TaskService.assignTasktoUser(tempTaskId_1, username, token);
        window.location.reload();
    }

    const handleAssignTaskToSprint = sprintId => {
        console.log(tempTaskId_2, sprintId)
        TaskService.assignTasktoSprint(tempTaskId_2, sprintId, token);
        window.location.reload();
    }


    return (
        <React.Fragment>
            <h5>Backlog <button type="button" className="create btn btn-dark btn-sm" onClick={openTaskModal}>Create Task</button></h5>
            {showTaskModal ? <TaskModal addTask={handleTaskAdd} setShowTaskModal={setShowTaskModal} /> : null}
            {showAssignTaskUserModal ? <AssignTaskUserModal handleAssignTaskToUser={handleAssignTaskToUser} setShowAssignTaskUserModal={setShowAssignTaskUserModal} /> : null}
            {showAssignTaskSprintModal ? <AssignTaskSprintModal handleAssignTaskToSprint={handleAssignTaskToSprint} setShowAssignTaskSprintModal={setShowAssignTaskSprintModal} /> : null}
            {showUpdateTaskModal ? <UpdateTaskModal inputTask={tempTask} updateTask={handleTaskUpdate} setShowUpdateTaskModal={setShowUpdateTaskModal} /> : null}
            <BacklogTasksTable handleTaskUpdate={handleTaskUpdate} handleTaskDelete={handleTaskDelete} openAssignTaskUserModal={openAssignTaskUserModal}
                openAssignTaskSprintModal={openAssignTaskSprintModal} openUpdateTaskModal={openUpdateTaskModal} inputBacklog={backlog} />
        </React.Fragment>
    )
}

export default BacklogTask
