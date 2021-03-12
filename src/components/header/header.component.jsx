import React from 'react';

import {signInWithGoogle} from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.css';


const Pageheader = ({currentUser}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top">

                <Link className="navbar-brand" to='/'>
                     Resume Builder
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    
                    <ul className="nav navbar-nav ml-auto">
                        <li>
                            {
                                currentUser ?
                                    <a className="nav-link pull-right" onClick={() => auth.signOut()}>Log Out</a>
                                    :
                                    <button type="button" className="btn  btn-primary" onClick={signInWithGoogle}>Sign In</button>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Pageheader;
