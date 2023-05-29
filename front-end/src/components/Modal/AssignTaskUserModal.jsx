import React, { useState } from 'react'
import './modal.css'

export default function AssignTaskUserModal({ handleAssignTaskToUser, setShowAssignTaskUserModal }) {

    const [username, setUsername] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        handleAssignTaskToUser(username);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-2">
                <div className="titleCloseBtn"><button onClick={() => setShowAssignTaskUserModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-11">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={e => setUsername(e.target.value)}
                                    value={username}
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