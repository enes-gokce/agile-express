import React, { useState } from 'react'
import './modal.css'

export default function TeamModal({ addTeam, setShowTeamModal }) {

    const [team, setTeam] = useState({ id: 1, title: "", content: "" });

    const submitHandler = e => {
        e.preventDefault();
        addTeam(team);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-team">
                <div className="titleCloseBtn"><button onClick={() => setShowTeamModal(false)}>X</button></div>
                <div className="title"><h3>Add New Team</h3></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-6">
                                <label>Team Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter team title"
                                    onChange={e => setTeam({ ...team, title: e.target.value })}
                                    value={team.title}
                                />
                            </div>
                            <div className="mb-1 col-lg-6">
                                <label>Team Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter team content"
                                    onChange={e => setTeam({ ...team, content: e.target.value })}
                                    value={team.content}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="d-grid col-lg-6">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}