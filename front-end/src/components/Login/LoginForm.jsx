import React, { useState } from 'react'
import './loginForm.css'
import UserService from '../../services/UserService.js'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ username: "", password: "" });
    const [token, setToken] = useState(UserService.authenticate(details.username, details.password).then((response) => { setToken(response.data.token) }));

    const submitHandler = e => {
        e.preventDefault();
        Login(details, token);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2 className="text-dark text-center">Welcome to <br /> Agile Express</h2>
            <h3 className="text-dark text-center">Login</h3>
            {(error !== "") ? (<h5 className="error text-danger text-center">{error}</h5>) : ""}
            <div className="mb-3">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={e => setDetails({ ...details, password: e.target.value })}
                    value={details.password}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
            </button>
            </div>
        </form>
    )
}

export default LoginForm;