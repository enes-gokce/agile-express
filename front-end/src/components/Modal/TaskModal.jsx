import React, { useState } from 'react'
import './modal.css'

export default function TaskModal({ addTask, setShowTaskModal }) {

    const [task, setTask] = useState({ id: 1, title: "", content: "", status: "", duration: "", storyPoint: "", startDate: "" });

    const submitHandler = e => {
        e.preventDefault();
        addTask(task);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-task">
                <div className="titleCloseBtn"><button onClick={() => setShowTaskModal(false)}>X</button></div>
                <div className="title"><h3>Add New Task</h3></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-6">
                                <label>Task Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task title"
                                    onChange={e => setTask({ ...task, title: e.target.value })}
                                    value={task.title}
                                />
                            </div>
                            <div className="mb-1 col-lg-6">
                                <label>Task Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task content"
                                    onChange={e => setTask({ ...task, content: e.target.value })}
                                    value={task.content}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-1 col-lg-6">
                                <label>Story Point</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task story point"
                                    onChange={e => setTask({ ...task, storyPoint: e.target.value })}
                                    value={task.storyPoint}
                                />
                            </div>
                            <div className="mb-1 col-lg-6">
                                <label>Starting Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Enter task starting date"
                                    onChange={e => setTask({ ...task, startDate: e.target.value })}
                                    value={task.startDate}
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