import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import { Routes, Route, Link } from 'react-router-dom'
import ProjectModal from '../../components/Modal/ProjectModal.jsx'
import Board from '../../components/Board/Board.jsx'
import ProjectService from '../../services/ProjectService.js'

function Dashboard({ Logout, user, token }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        ProjectService.getAllProjects(token).then((response) => { setProjects(response.data) });
    }, [])

    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
        setShowModal(true);
    }

    const handleAdd = inputProject => {
        let tempProject = {
            title: inputProject.projectTitle,
            content: inputProject.projectContent,
            startDate: inputProject.createDate
        }
        setShowModal(false);
        ProjectService.postProject(tempProject, token);
        window.location.reload();
    }

    const handleDelete = projectId => {
        ProjectService.deleteProject(projectId, token);
        window.location.reload();
    }

    return (<React.Fragment>
        <div className="Dashboard">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="navbar-container container">
                    <Link className="navbar-brand" to={'/dashboard'}>
                        Agile Express
                        </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/dashboard'}>
                                    Dashboard
                                    </Link>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="logout btn btn-danger btn-md" onClick={Logout}>Log out</button>
                </div>
            </nav>
            <Routes>
                <Route path="/dashboard/*" element={<Dashboard Logout={Logout} user={user} />} />
            </Routes>

            <br /> <br />
            <div className="dashboard-container bg-white">
                <div className="dashboard-userDetails">
                    <h2 className="userDetailH2">{user.name} {user.surname} </h2>
                    <h5 className="roleH5 text-muted">{user.role}</h5>
                </div>
                <hr className="py-1 bg-dark" />
                <div className="dashboard-project">
                    <div className="create-project">
                        <h2>Projects <button type="button" className="create btn btn-dark btn-md" onClick={openModal}>Create Project</button></h2>
                        {showModal ? <ProjectModal addProject={handleAdd} setShowModal={setShowModal} /> : null}
                    </div>
                    <div className="show-projects">
                        {projects.map(project =>
                            <div key={project.projectId} className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{project.title} <button className="btn btn-sm btn-outline-dark delete-project-btn" onClick={() => handleDelete(project.projectId)}>🗑️</button></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Created on: {project.startDate}</h6>
                                    <p className="card-text">{project.content}</p>
                                    <Link className="card-link" to={'/project/' + project.projectId} >View the project </Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="Board">
                    <Routes>
                        <Route path='/project/:id' element={<Board token={token} />} />
                    </Routes>
                </div>
            </div>
        </div>
    </React.Fragment>);
}

export default Dashboard;