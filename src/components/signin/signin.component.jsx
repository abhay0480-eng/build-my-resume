import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    };


    handleSubmmit = (event) => {
      event.preventDefault();

      this.setState({email:'',password: ''})
    };

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]:value });
    };

    render(){
        return(
            <div className="container">
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={this.handleSubmmit} >
                    <div className="form-floating mb-3">
                        <input 
                        type="email" 
                        class="form-control" 
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required
                         />
                     <label for="floatingInput">Email</label>
                     </div>

                     <div className="form-floating mb-3">
                        <input 
                        type="password" 
                        class="form-control" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange} 
                        required
                         />
                     <label for="floatingInput">Password</label>
                     </div>
                    
                     <button type="submit" class="btn btn-primary">Sign In</button>
                     <button onClick={signInWithGoogle} className="btn btn-primary">{' '}Sign In with Google{' '}</button>
                </form>
            </div>
        )
    }
}

export default SignIn;