import React, { useState } from 'react'
import './modal.css'

export default function UpdateTeamModal({ inputTeamId, inputTitle, inputContent, updateTeam, setShowUpdateTeamModal }) {

    const [updatedTeam, setTeam] = useState({ id: inputTeamId, title: inputTitle, content: inputContent });

    const submitHandler = e => {
        e.preventDefault();
        console.log(updatedTeam);
        updateTeam(updatedTeam);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-team-update modal-container-team">
                <div className="titleCloseBtn"><button onClick={() => setShowUpdateTeamModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-3">
                                <label>Team Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => setTeam({ ...updatedTeam, title: e.target.value })}
                                    value={updatedTeam.title}
                                />
                            </div>
                            <div className="mb-1 col-lg-7">
                                <label>Team Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => setTeam({ ...updatedTeam, content: e.target.value })}
                                    value={updatedTeam.content}
                                />
                            </div>
                            <div className="col-lg-1">
                                <br />
                                <button type="submit update-submit" className="btn btn-primary">
                                    Update
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}