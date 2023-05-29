import React, { useState } from 'react'
import './modal.css'

export default function AssignUserTeamModal({ handleAssignUserToTeam, setShowAssignUserTeamModal }) {

    const [teamId, setTeamId] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        handleAssignUserToTeam(teamId);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-2">
                <div className="titleCloseBtn"><button onClick={() => setShowAssignUserTeamModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-11">
                                <label>Team Id:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter team id"
                                    onChange={e => setTeamId(e.target.value)}
                                    value={teamId}
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