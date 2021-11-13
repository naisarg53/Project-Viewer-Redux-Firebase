import React from 'react';
import Notifications from './Notifications';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { Link, Redirect } from 'react-router-dom';
import { auth } from 'firebase';
import moment from 'moment';

const Dashboard = () => {

    useFirestoreConnect([
        { collection: "projects" },
    ]);

    const getData = useSelector((state) => state.firestore.ordered.projects);
    const checkLogin = useSelector((state) => state.firebase.auth);

    if (!checkLogin.uid) return <Redirect to='/signIn' />
   
    return (
        <div className="container bg-info">
            <div className="row col-lg-12 col-md-12 col-sm-12">
                <div>
                    <div className="container ml-3 mt-5 bg-light" >           
                    <div className="col p-2">                
                        {getData &&
                            Object.values(getData).map((project, i) => (
                                <div key={i} values={project}>
                                    <div className="card rounded col-sm-6 col-md-8 col-lg-12 mt-5 mb-5">
                                        <div className="card-body">
                                            <Link to={"/ProjectDetails/" + project.id}><h3 className="card-title" style={{ fontSize: "20px" }}>{project.title}</h3></Link>
                                            <p className="card-text" style={{ fontSize: "16px" }}>Project By {project.first_name} {project.last_name}</p>
                                            <p className="card-text" style={{ fontSize: "16px" }}>{moment(project.createdAt.toDate()).calendar()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }                
                    </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}
export default Dashboard
