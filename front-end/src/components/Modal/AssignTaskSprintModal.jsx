import React, { useState } from 'react'
import './modal.css'

export default function AssignTaskSprintModal({ handleAssignTaskToSprint, setShowAssignTaskSprintModal }) {

    const [sprintId, setSprintId] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        handleAssignTaskToSprint(sprintId);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-2">
                <div className="titleCloseBtn"><button onClick={() => setShowAssignTaskSprintModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-11">
                                <label>Sprint id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter sprint id"
                                    onChange={e => setSprintId(e.target.value)}
                                    value={sprintId}
                                />
                            </div>
                        </div>
                        <div className="mb-1 d-grid col-lg-11">
                            <button type="submit" className="btn btn-primary btn-md mb-1">
                                Assign
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}