import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import NewProject from './components/NewProject';
import ProjectDetails from './components/ProjectDetails';

function App() {
    return (

        <Router>
            <div className="App bg-info" style={{ height: "100vh" }}>
                <div className="bg-info">
                <NavBar />
                    <Route exact path="/" component={Dashboard} />
                </div>
                    <div className="container">
                    <Route exact path="/SignUp" component={Register} />
                    <Route exact path="/SignIn" component={Login} />
                    <Route exact path="/NewProject" component={NewProject} />
                    <Route path="/ProjectDetails/:id" component={ProjectDetails} />
                </div>
                </div>
        </Router>
  );
}

export default App;
