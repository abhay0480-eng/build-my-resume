import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CreateResume extends React.Component {

    back = e => {
        e.preventDefault();
        this.props.prevSteps();
    }
    render() {
        const {values:{firstName,
            lastName,
            phoneNumber,
            pincode,
            email,
            address,
            city,
            state,
            country,
           
           
            school,
            schoolCity,
            schoolState,
            Degree,
            fieldofstudy,
            graduationDate,
            skills,
             projects,
             jobTitle,
             employer,
             jobCity,
             experienceYear
            }} = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                    <p className="display-4 text-center">Resume</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <h1>{firstName} {lastName}</h1>
                
                    <p>+91 {phoneNumber} | {email}</p>
                    <p>Address: {address} , {city},{state},{country}  ({pincode})</p>
                    </Col>
                    <Col  >
                        <h3>Experience</h3>
                        <p> Job title: {jobTitle}</p>
                        <p> Employer: {employer}</p>
                        <p> City: {jobCity}</p>
                        <p> Year of Experience: {experienceYear}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                 <h3>Qualification</h3>
                    <p>School/College Name: {school}</p>
                    <p>City: {schoolCity}</p>
                    <p>State: {schoolState}</p>
                    <p>Degree: {Degree}</p>
                    <p>
                        Field of Study: {fieldofstudy}
                    </p>
                    <p>Graduation Date: {graduationDate}</p>
                   
                    </Col>
                    <Col>
                    <h3>Skills & Projects</h3>
                    <p>Skills: {skills}</p>
                    <p> Projects: {projects}</p>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default CreateResume;