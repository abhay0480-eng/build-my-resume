
import React from 'react';
import './homepage.styles.css';
import {Link} from 'react-router-dom';

function Homepage() {
    
    return (
        <div className="homepage">
            <div className="container-fluid ">
                <div className=" row justify-content-sm-center  section1 ">
                    <div className="col-12  col-sm-7  ">
                       <h6 className="text-center">Online Resume Builder</h6>
                       <h1 className="text-center fontStyle">The resume builder trusted by professionals</h1>
                       <Link className="link" to='/buildresume'>
                       <div className="col-12 col-sm-3 d-grid gap-2 mx-auto">
                       <button className="btn btn-secondary" >Create Your CV</button> 
                       </div>
                       </Link>
                          
                    </div>
                </div>

                <div className=" row justify-content-sm-center  section2 ">
                    
                </div>
                
            </div>
        </div>
    )
}

export default Homepage;
