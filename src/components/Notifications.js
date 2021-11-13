import React from 'react';

const Notifications = () => {
    return (

        <div className="mt-5 ml-3 mb-5 bg-light">
            <div className="col p-5">
                
                    <div className="card rounded">
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontSize: "20px" }}>Project Title</h3>                        
                            <p className="card-text" style={{ fontSize: "16px" }}>Project By NN</p>
                            <p className="card-text" style={{ fontSize: "16px" }}>Time</p>
                        </div>
                    </div>
                    <div className="card rounded">
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontSize: "20px" }}>Project Title</h3>
                            <p className="card-text" style={{ fontSize: "16px" }}>Project By NN</p>
                            <p className="card-text" style={{ fontSize: "16px" }}>Time</p>
                        </div>
                    </div>
               
            </div>
        </div>
    )
}
export default Notifications;