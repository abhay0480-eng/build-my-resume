import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';



class Homepage extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Jumbotron fluid>
  <Container>
    <h1 className="text-center font-weight-bolder">Build Your Resume </h1>
  </Container>
</Jumbotron>
<div className="container">
    
</div>

            </div>
        )
    }
}

export default Homepage;