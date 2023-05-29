import React, { useState } from 'react'
import SprintService from '../../services/SprintService';
import TaskService from '../../services/TaskService';
import AddSpentTimeModal from '../Modal/AddTimeSpentModal';
import ChangeStatusModal from '../Modal/ChangeStatusModal';
import SprintModal from '../Modal/SprintModal';
import AssignedTasksTable from '../Tables/AssignedTasksTable';

function Sprint({ projectId, token, inactiveSprints, activeSprint }) {

    const [showSprintModal, setShowSprintModal] = useState(false);
    const [showUpdateSprintModal, setShowUpdateSprintModal] = useState(false);
    const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);
    const [showAddTimeSpentModal, setShowAddTimeSpentModal] = useState(false);

    const [tempTaskId_1, setTempTaskId_1] = useState("");
    const [tempTaskId_2, setTempTaskId_2] = useState("");

    const [tempStatus_1, setTempStatus_1] = useState("");

    const openSprintModal = () => {
        setShowSprintModal(true);
    }

    const openUpdateSprintModal = () => {
        setShowUpdateSprintModal(true);
    }

    const openChangeStatusModal = (taskId, status) => {
        setShowChangeStatusModal(true);
        setTempTaskId_1(taskId);
        setTempStatus_1(status);
    }

    const openAddTimeSpentModal = (taskId) => {
        setShowAddTimeSpentModal(true);
        setTempTaskId_2(taskId);
    }

    const handleAddSprint = inputSprint => {
        SprintService.postSprint(projectId, inputSprint, token);
        window.location.reload();
    }

    const handleSprintActivate = sprintId => {
        SprintService.activateSprint(sprintId, token);
        window.location.reload();
    }

    const handleSprintInactivate = sprintId => {
        SprintService.inactivateSprint(sprintId, token);
        window.location.reload();
    }

    const handleUnassign = taskId => {
        TaskService.unassignTasktoSprint(taskId, token);
        window.location.reload();
    }

    const handleChangeStatus = changedTask => {
        TaskService.updateTask(tempTaskId_1, changedTask, token);
        window.location.reload();
    }

    const handleAddTimeSpent = changedTask => {
        TaskService.updateTask(tempTaskId_2, changedTask, token);
        window.location.reload();
    }

    return (
        <React.Fragment>
            <br />
            <h3>Sprints <button type="button" className="create btn btn-dark btn-sm" onClick={openSprintModal}>Create Sprint</button></h3>
            {showSprintModal ? <SprintModal addSprint={handleAddSprint} setShowSprintModal={setShowSprintModal} openChangeStatusModal={openChangeStatusModal} /> : null}
            <hr />
            {activeSprint.sprintId !== null ?
                <div className="active-sprint">
                    <div><h4>Active Sprint</h4>
                        <br />
                        <h5>Sprint ID: {activeSprint.sprintId} | {activeSprint.title} | {activeSprint.content} <button type="button" className="create btn btn-dark btn-sm" onClick={() => handleSprintInactivate(activeSprint.sprintId)}>Inactivate Sprint</button></h5>
                        <h5>Start Date: {activeSprint.startDate} | Finish Date: {activeSprint.finishDate} </h5>
                        <AssignedTasksTable sprintId={activeSprint.sprintId} token={token} handleUnassign={handleUnassign} openChangeStatusModal={openChangeStatusModal} openAddTimeSpentModal={openAddTimeSpentModal} />
                    </div>
                    <br />
                </div> : null}
            <div className="inactive-sprints">
                <h4>Inactive Sprints</h4>
                <br />
                {showChangeStatusModal ? <ChangeStatusModal prevStatus={tempStatus_1} handleChangeStatus={handleChangeStatus} setShowChangeStatusModal={setShowChangeStatusModal} /> : null}
                {showAddTimeSpentModal ? <AddSpentTimeModal handleAddTimeSpent={handleAddTimeSpent} setShowAddTimeSpentModal={setShowAddTimeSpentModal} /> : null}
                {inactiveSprints.map(sprint =>
                    <div key={sprint.sprintId}>
                        <h5>Sprint ID: {sprint.sprintId} | {sprint.title} | {sprint.content} <button type="button" className="create btn btn-dark btn-sm" onClick={() => handleSprintActivate(sprint.sprintId)}>Activate Sprint</button></h5>
                        <h5>Start Date: {sprint.startDate} | Finish Date: {sprint.finishDate} </h5>
                        <AssignedTasksTable sprintId={sprint.sprintId} token={token} handleUnassign={handleUnassign} openChangeStatusModal={openChangeStatusModal} openAddTimeSpentModal={openAddTimeSpentModal} />
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Sprint
