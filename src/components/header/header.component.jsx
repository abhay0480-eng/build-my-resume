import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.css';

const Pageheader = ({currentUser}) => {
    return(
        <div>
            <nav class="navbar navbar-light navbar-expand-sm  fixed-top">
                <div class="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        Resume Builder
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item ">
      
                            {
                                currentUser ?
                                    <a className="nav-link pull-right" onClick={() => auth.signOut()}>Log Out</a>
                                    :
                                    <button type="button" className="btn  btn-primary" onClick={signInWithGoogle}>Sign In</button>
                            }
                        </li>
       
        </ul>
        </div>
                </div>
            </nav>

        </div>
    )
}
export default Pageheader;
