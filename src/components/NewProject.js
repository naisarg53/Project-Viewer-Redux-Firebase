import React, { useState } from 'react'
import { createProject } from '../actions/projectActions';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const NewProject = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [getState, setState] = useState({
        title: '',
        description: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setState(getState => ({ ...getState, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("username=" + getState);
        //        createProject(getState);
        dispatch(createProject(getState));
        history.push('/');
    }

    const checkLogin = useSelector((state) => state.firebase.auth);

    if (!checkLogin.uid) return <Redirect to='/signIn' />

    return (
        <div className="container mt-5  bg-light">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Add New Project</h1>
                        <div className="form-group">
                            <label htmlFor="content">Project Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter Project Title"
                                value={getState.title}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Project Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                placeholder="Enter Project Description"
                                value={getState.description}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block mb-5"
                        >
                            Create
                           
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewProject