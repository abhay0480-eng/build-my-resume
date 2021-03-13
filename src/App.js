import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/pages/Homepage/homepage.component';
import SignInPage from './components/pages/sign-in-and-sign-up/sign-in.component';
import Pageheader from './components/header/header.component';

import UserForm from './components/UserForm/userform.component';

import {auth} from './firebase/firebase.utils';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{

      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){


    return (
      <div >
        <Pageheader currentUser={this.state.currentUser}/>
        <Switch>
        
        <Route exact path='/'       component={Homepage} />
        <Route  path='/signin'      component={SignInPage} />
        
        <Route  path='/userform'    component={UserForm}/>
        
      
        </Switch>
   
      </div>
    )

  }
  
 
}

export default App;
