import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './signin.styles.css';
import { ImGoogle} from "react-icons/im";




class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    };




    

    render(){
        return(
            
         
<Container className="text-center containerstyles">
                    <Row>
                        <Col className="signin">
                        <h2 className="display-4">I already have an account</h2>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="buttonstyle">
                        <p>Sign In With Google</p>
                        <button  onClick={signInWithGoogle} className="btn btn-primary font-weight-bold">{' '}<ImGoogle size="60px"/>{' '}</button>
                        </Col>
                    </Row>
                </Container>
        
                
               
              
         
        )
    }
}

export default SignIn;