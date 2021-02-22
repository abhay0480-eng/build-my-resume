import React from 'react';

import {Link} from 'react-router-dom';






function Pageheader(){
    return(
     <div>
        <nav className="navbar navbar-expand-md  bg-secondary navbar-dark">
        
        <Link  className="navbar-brand"  to='/'> Home</Link>
        
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
          
          <ul className="navbar-nav">
              
              <li className="nav-item  ">
              <Link className="nav-link" to='/'>About Me</Link>
            </li>
            
          <li className="nav-item  ">
              <Link className="nav-link" to='/signin'>Login </Link>
            </li>
            

          </ul>
          </div>  
        </nav>
        
  
        </div>
            
     
    )
}

export default Pageheader;