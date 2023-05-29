import React, { useState } from 'react'
import './modal.css'

export default function SprintModal({ addSprint, setShowSprintModal }) {

    const [sprint, setSprint] = useState({ id: 1, title: "", content: "", startDate: "", finishDate: "" });

    const submitHandler = e => {
        e.preventDefault();
        addSprint(sprint);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-sprint">
                <div className="titleCloseBtn"><button onClick={() => setShowSprintModal(false)}>X</button></div>
                <div className="title"><h3>Add New Sprint</h3></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-6">
                                <label>Sprint Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter sprint title"
                                    onChange={e => setSprint({ ...sprint, title: e.target.value })}
                                    value={sprint.title}
                                />
                            </div>
                            <div className="mb-1 col-lg-6">
                                <label>Sprint Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter sprint content"
                                    onChange={e => setSprint({ ...sprint, content: e.target.value })}
                                    value={sprint.content}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-1 col-lg-6">
                                <label>Starting Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Enter task starting date"
                                    onChange={e => setSprint({ ...sprint, startDate: e.target.value })}
                                    value={sprint.startDate}
                                />
                            </div>
                            <div className="mb-1 col-lg-6">
                                <label>Finish Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Enter task starting date"
                                    onChange={e => setSprint({ ...sprint, finishDate: e.target.value })}
                                    value={sprint.finishDate}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="d-grid">
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