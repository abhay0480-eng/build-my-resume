
import React from 'react';
import './homepage.styles.css';
import {Link} from 'react-router-dom';
import hoepic from '../../../assets/homepic.webp';

function Homepage() {
    
    return (
        <div className="homepage">
            <div className="container-fluid ">
        
                <div className=" row justify-content-sm-center  section1 ">
                    <div className="col-12  col-sm-6  ">
                       <h6 className="text-center">Online Resume Builder</h6>
                       <h1 className="text-center h1 fontStyle">The resume builder trusted by professionals</h1>
                       
                    </div>
                </div>
              
                <div className=" row justify-content-sm-center  section2 ">
                    
                <div className="col-12 col-sm-6">
                    
                <Link className="link" to='/userform'>
                       <div className="col-12 col-sm-3 d-grid gap-2 mx-auto">
                       <button className="btn btn-secondary" >Create Your CV</button> 
                       
                       </div>
                       </Link>
                          
                </div>
                </div>
                <div className="row justify-content-center section-3">
                    <div className="col-12 col-sm-6">
                    <img src={hoepic} class="img-fluid" alt="resumepic"/>
                    </div>
                </div>
                <div className="row justify-content-center section-4">
                    <div className="col-12 align-self-center col-sm-9">
                    <p className="display-5 text-center">Effortlessly make a job-worthy resume and cover letter that gets you hired faster</p>
                    </div>
                </div>

                
                
            </div>
        </div>
    )
}

export default Homepage;
