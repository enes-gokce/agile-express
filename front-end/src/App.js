import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginForm from './components/Login/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import UserService from './services/UserService';
function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState({username: "*"});
  const [token, setToken] = useState("*");
  const [error, setError] = useState("");

  const Login = (details,inputToken) => {
    console.log(details);
    console.log(inputToken);
    if(inputToken !== "null"){
      console.log("User logged in into the system succesfully!");
      setToken(inputToken);
      UserService.getUser(inputToken).then((response) => { setUser(response.data)})
      navigate("/dashboard");
    }
    else{
      console.log("Usarname or password is wrong!");
      setError("Usarname or password is wrong!");
    }
    console.log("hello" + JSON.stringify(user));
  }

  const Logout = () => {
    setUser({username: "*", password:"", name: "", surname: "",role: ""});
    setToken("*")
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log("Logout");
    setError("")
    navigate("/sign-in")
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token')
    
    if(storedUser !== null && storedUser.username !== "*") setUser(storedUser);
    if(storedToken !== null && storedToken !== "*") setToken(storedToken);
    
    console.log("restore user with " + localStorage.getItem('user'));
    console.log("restore token with " + localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    localStorage.setItem('token', token);
    console.log("store token to local storage with " + token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    console.log("store user to local storage with " + JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      {(user.username !== "*") ? (
          <Routes>
            <Route exact path="/*" element={<Dashboard Logout={Logout} user={user} token={token}/>}/>
            <Route path="/dashboard/*" element={<Dashboard Logout={Logout} user={user} token={token}/>} />
          </Routes>
      ) : (
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container navbar-container">
                <Link className="navbar-brand" to={'/sign-in'}>
                  Agile Express
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-in'}>
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route path="/" element={<LoginForm Login={Login} error={error}/>} />
                  <Route path="/sign-in/*" element={<LoginForm Login={Login} error={error}/>} />
                </Routes>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default App;
