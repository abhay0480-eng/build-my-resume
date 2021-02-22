import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/pages/Homepage/homepage.component';
import SignInPage from './components/pages/sign-in-and-sign-up/sign-in.component';
import Pageheader from './components/header/header.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
     <Pageheader/>
     <Switch>
     
     <Route exact path='/' component={Homepage} />
     <Route exact path='/signin' component={SignInPage} />
     
   
     </Switch>

   </div>
  );
}

export default App;
