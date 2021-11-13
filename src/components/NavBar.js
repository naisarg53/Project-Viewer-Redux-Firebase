import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signOut } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';

const Dashboard = () => {

    const dispatch = useDispatch();

    const LoginStatusCheck = useSelector((state) => state.firebase.auth);

    const getProfile = useSelector((state) => state.firebase.profile);

    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }

    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample10"
                    aria-controls="navbarsExample10"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
            </button>

            <div className="container">
                <a className="navbar-brand mb-0 h1" href="/">Dashboard</a>
            
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarsExample10"
                >
                      

                    {LoginStatusCheck.uid ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" >
                                <Link to="/NewProject" className="nav-link">
                                    New Project
                            </Link>
                            </li>

                            <li className="nav-item" >
                                <a onClick={handleSignOut} className="nav-link">
                                    SignOut
                            </a>
                            </li>

                            <li className="nav-item btn-" >
                                <Link to="/SignIn" className="nav-link rounded-circle btn-primary">
                                    {getProfile.initials}
                            </Link>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" >
                                <Link to="/SignIn" className="nav-link">
                                    SignIn
                            </Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/SignUp" className="nav-link">
                                    SignUp
                            </Link>
                            </li>
                           
                        </ul>
                    }

                </div>
                </div>
            </nav>
        )
}

export default withRouter(Dashboard)
