import React from 'react';

import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';






const Pageheader = ({currentUser})=>{
    return(
     <div>
        <nav className="navbar navbar-expand-md bg-secondary navbar-dark sticky-top">
        
        <Link  className="navbar-brand"  to='/'> Home</Link>
        
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          
          <ul className="navbar-nav ">
              
              <li className="nav-item ">
              <Link className="nav-link" to='/'>About Me</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to='/buildresume'>Build My Resume</Link>
            </li>
            
           
              {
                
                currentUser?
                <Link className="nav-link" onClick={()=>auth.signOut()}>Log Out </Link>
                :
                <Link className="nav-link" to='/signin'>Log In </Link>
              
              }
              </ul>
          </div>  
        
        </nav>
        
  
        </div>
            
     
    )
}

export default Pageheader;