import React, { useState } from 'react'
import './modal.css'

export default function UpdateTaskModal({ inputTask, updateTask, setShowUpdateTaskModal }) {

    const [updatedTask, setTask] = useState({
        taskId: inputTask.taskId, title: inputTask.title, content: inputTask.content,
        status: inputTask.status, duration: inputTask.duration, storyPoint: inputTask.storyPoint, startDate: inputTask.startDate
    });

    const submitHandler = e => {
        e.preventDefault();
        updateTask(updatedTask);
    }

    return (
        <div className="modal-background">
            <div className="modal-container modal-container-task-update">
                <div className="titleCloseBtn"><button onClick={() => setShowUpdateTaskModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-2">
                                <label>Task Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task title"
                                    onChange={e => setTask({ ...updatedTask, title: e.target.value })}
                                    value={updatedTask.title}
                                />
                            </div>
                            <div className="mb-1 col-lg-4">
                                <label>Task Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task content"
                                    onChange={e => setTask({ ...updatedTask, content: e.target.value })}
                                    value={updatedTask.content}
                                />
                            </div>
                            <div className="mb-1 col-lg-2">
                                <label>Status</label>
                                <select className="form-control" name="status" id="status" onChange={e => setTask({ ...updatedTask, status: e.target.value })}
                                    value={updatedTask.status}>
                                    <option value="To-do">To-do</option>
                                    <option value="Development">Development</option>
                                    <option value="Test">Test</option>
                                    <option value="Deployment">Deployment</option>
                                </select>

                            </div>
                            <div className="mb-1 col-lg-1">
                                <label>Story Point</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task story point"
                                    onChange={e => setTask({ ...updatedTask, storyPoint: e.target.value })}
                                    value={updatedTask.storyPoint}
                                />
                            </div>
                            <div className="mb-1 col-lg-2">
                                <label>Starting Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Enter task starting date"
                                    onChange={e => setTask({ ...updatedTask, startDate: e.target.value })}
                                    value={updatedTask.startDate}
                                />
                            </div>
                            <div className="d-grid col-lg-1">
                                <br />
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Submit
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}