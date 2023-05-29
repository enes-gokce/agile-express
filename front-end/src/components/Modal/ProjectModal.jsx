import React, { useState } from 'react'
import './modal.css'

export default function ProjectModal({ addProject, setShowModal }) {

    const [project, setProject] = useState({ id: 1, projectTitle: "", projectContent: "", createDate: "" });

    const submitHandler = e => {
        e.preventDefault();
        addProject(project);
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="titleCloseBtn"><button onClick={() => setShowModal(false)}>X</button></div>
                <div className="title"><h3>Add New Project</h3></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label>Project Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter project title"
                                onChange={e => setProject({ ...project, projectTitle: e.target.value })}
                                value={project.projectTitle}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Project Content</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter project content"
                                onChange={e => setProject({ ...project, projectContent: e.target.value })}
                                value={project.projectContent}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Starting Date</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter project starting date"
                                onChange={e => setProject({ ...project, createDate: e.target.value })}
                                value={project.createDate}
                            />
                        </div>
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