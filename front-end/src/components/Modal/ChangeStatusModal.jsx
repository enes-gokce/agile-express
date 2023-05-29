import React, { useState } from 'react'
import './modal.css'

export default function ChangeStatusModal({ prevStatus, handleChangeStatus, setShowChangeStatusModal }) {

    const [status, setStatus] = useState({ status: prevStatus });

    const submitHandler = e => {
        e.preventDefault();
        console.log(status);
        handleChangeStatus(status);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-2">
                <div className="titleCloseBtn"><button onClick={() => setShowChangeStatusModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-11">
                                <label>Team Id:</label>
                                <select className="form-control" name="status" id="status" onChange={e => setStatus({ status: e.target.value })}
                                    value={status.status}>
                                    <option value="To-do">To-do</option>
                                    <option value="Development">Development</option>
                                    <option value="Test">Test</option>
                                    <option value="Deployment">Deployment</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-1 d-grid col-lg-11">
                            <button type="submit" className="btn btn-primary btn-md mb-1">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}