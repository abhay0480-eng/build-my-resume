
import React from 'react';
import './homepage.styles.css';
import {Link} from 'react-router-dom';
import resumepic from '../../../assets/homepic copy.jpg';
import image2 from '../../../assets/image2.jpeg';
import {FaFacebookF } from 'react-icons/fa';
import {FaGoogle } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

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
                    <img src={resumepic} class="img-fluid img1" alt="resumepic"/>
                    </div>
                </div>
                <div className="row justify-content-center section-4">
                    <div className="col-12 align-self-center col-sm-9">
                    <p className="display-6 text-center">Effortlessly make a job-worthy resume and cover letter that gets you hired faster</p>
                    </div>
                </div>
                <div className="row justify-content-center  section-5">
                    <div className="col-12 align-self-center  text-center col-sm-6">
                    <img src={image2} class="img-fluid " width="350px" height="400px"alt="resumepic2"/>
                    </div>
                    <div className="col-12 align-self-center text-center col-sm-6">
                    <p className="h3">Start building your resume today for free!</p>
                    <Link className="link" to='/userform'>
                       <div className="col-12 col-sm-3 d-grid gap-2 mx-auto">
                       <button className="btn btn-secondary" >Build Your Resume Now</button> 
                       
                       </div>
                       </Link>
                          
                    </div>
                </div>
                
                
                
                
            </div>
            <footer className="row  justify-content-center">
                    
                    <div className="col-sm-12  " >
                    <p className="text-center">Contact with us on Social Media</p>
                    <div className="align-items-center justify-content-center d-flex">
                    <a class=" facebook btn m-1 btn-floating rounded-circle" role="button" href="https://www.facebook.com" ><FaFacebookF color="white"/></a>
                    <a class=" google btn m-1 btn-floating rounded-circle " href="https://www.google.com" ><FaGoogle color="white"/></a>
                    <a class=" twitter btn m-1 btn-floating rounded-circle " href="https://www.twitter.com" ><FaTwitter color="white"/></a>
                    <a class=" instagram btn m-1 btn-floating rounded-circle " href="https://www.instagram.com" ><FaInstagram color="white"/></a>
                    <a class=" linkedin btn m-1 btn-floating rounded-circle " href="https://www.linkedin.com" ><FaLinkedin color="white"/></a>
                    <a class=" github btn m-1 btn-floating rounded-circle " href="https://www.github.com" ><FaGithub color="white"/></a>
                    </div>
                    </div>
                    <div className="align-self-center">
                    <p className="text-center">&copy;2021 copyright-resumebuilder.com</p>
                    </div>
                    
                    
                </footer>
           
        </div>
    )
}

export default Homepage;
