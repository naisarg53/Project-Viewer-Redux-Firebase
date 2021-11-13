import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment'; 
 
const ProjectDetails = (props) => {

    const id = props.match.params.id;
    console.log(props);

    useFirestoreConnect(() => [
        { collection: "projects", doc: id }
    ]);

    const project = useSelector(
        ({ firestore: { data } }) => data.projects && data.projects[id]
    )
    
  /*  useFirestoreConnect([
        {collection: "projects"}
    ])

    const projects = useSelector((state) => state.firestore.ordered.projects[id]);
    console.log(projects);*/

    const checkLogin = useSelector((state) => state.firebase.auth);

    if (!checkLogin.uid) return <Redirect to='/signIn' />

    return (

        <div className="container mt-5 bg-light">
            <div className="row">
                
                    <div className="col-sm-4 col-md-6 col-lg-6 mt-5 mb-5">
                        <div className="card rounded">
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontSize: "20px" }}>{project.title}: {id}</h3>
                            <p className="card-text" style={{ fontSize: "16px" }}>Posted by : {project.first_name} {project.last_name}</p>
                            <p className="card-text" style={{ fontSize: "16px" }}>{moment(project.createdAt.toDate()).calendar()}</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default ProjectDetails;