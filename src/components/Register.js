import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { SignUp } from '../actions/authActions';

const Register = () => {

    const dispatch = useDispatch();

    const [getState, setState] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setState(getState => ({ ...getState, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("username=" + getState.email);
        dispatch(SignUp(getState));
    }

    const LoginError = useSelector((state) => state.auth.authError);

    const checkLogin = useSelector((state) => state.firebase.auth);

    if (checkLogin.uid) return <Redirect to='/' />

    return (
        <div className="container">
            <div className="row mt-5 bg-light">
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

                        <div className="form-group">
                            <label htmlFor="name">FirstName</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="First Name"
                                value={getState.first_name}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Last Name"
                                value={getState.last_name}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block mb-5"
                        >
                            Register
                            </button>

                        <div className="text-danger">
                            {LoginError ? <p>{LoginError}</p> : null}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register