import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../actions/authActions';

const Login = () => {    

    const [getState, setState] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const onChange = (e) => {
        const { name, value } = e.target;
        setState(getState => ({ ...getState, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("username=" + getState.email);

        dispatch(signIn(getState));
        
    }

    const LoginError = useSelector((state) => state.auth.authError);

    const checkLogin = useSelector((state) => state.firebase.auth);

    if (checkLogin.uid) return <Redirect to='/' />

    
    return (
            
            <div className="container">
                <div className="row mt-5  bg-light">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={getState.email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={getState.password}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block "
                            >
                                Sign in
                            </button>
                            <div className="text-danger">
                                {LoginError ? <p> SignIn Failed!!</p> : null}
                            </div>
                            <div className="text-center font-weight-normal">or</div>
                            <Link to="/SignUp" className="nav-link btn-primary btn-block btn-lg btn mb-5">
                                Register
                                </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Login