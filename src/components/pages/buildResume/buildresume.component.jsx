import React from 'react';
import './buildresume.styles.css';
import fresher from '../../../assets/fresher.jpg';
import exp from '../../../assets/experience.jpg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class BuildResume extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <div className="card" >
                <img class="card-img-top" src={fresher} alt="Card image"></img>
                <div class="card-body">
    <h4 class="card-title">For Fresher</h4>
    <p class="card-text">Build your Resume As a Fresher</p>
    <a href="#" class="btn btn-primary">Click Here To Build</a>
  </div>
            </div>
                    </Col>
                    <Col>
                    <div className="card" >
                <img class="card-img-top" src={exp} alt="Card image"></img>
                <div class="card-body">
    <h4 class="card-title">For Experience</h4>
    <p class="card-text">Build your Resume As a Experience</p>
    <a href="#" class="btn btn-primary">Click Here To Build</a>
  </div>
            </div>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default BuildResume;