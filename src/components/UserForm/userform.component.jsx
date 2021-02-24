import React from 'react';
import PersonalDetails from './personaldetails.component';
import CreateResume from './yourresume.component';
import UserEducation from './education.component';
import Experience from './experience.component';
import Skills from './skills.component';
import Confirm from './confirm.component';



 class UserForm extends React.Component {
     state={
             //this is for header section
             step:1,
             firstName: '',
             lastName: '',
             phoneNumber: '',
             pincode: '',
             email: '',
             address:'',
             city:'',
             state:'',
             country:'',
            
            
             //this is for education section
             school:'',
             schoolCity:'',
             schoolState:'',
             Degree: '',
             fieldofstudy:'',
             graduationDate:'',

             //this is for skills and projects
             skills:'',
             projects:'',

             //this is for experience 
             jobTitle:'',
             employer:'',
             jobCity:'',
             experienceYear:''
            }
    

     //this is for next steps
        nextSteps=()=>{
            const {step}=this.state;
            this.setState({step: step+1});
     }
     //this is for previous step
        prevSteps=()=>{
            const{step}=this.state;
            this.setState({step:step-1});
        }

        //handle fields change
        handleChange=(input) => 
            (e) => {
                this.setState({[input]:e.target.value});
            }
        

    render() {
        const {step}=this.state;
        const {
            firstName,
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
             experienceYear} = this.state;
            
             const values={
                firstName,
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
                 experienceYear};

                 switch(step){
                     case 1:
                     return(
                        <PersonalDetails
                        nextSteps={this.nextSteps}
                        handleChange={this.handleChange}
                        values={values}
                        />
                     )
                     case 2:
                         return(
                            <UserEducation
                            nextSteps={this.nextSteps}
                            prevSteps={this.prevSteps}
                            handleChange={this.handleChange}
                            values={values}
                            />
                         )
                         case 3:
                        return(
                            <Experience
                            nextSteps={this.nextSteps}
                            prevSteps={this.prevSteps}
                            handleChange={this.handleChange}
                            values={values}
                            />

                        )
                        case 4:
                        return(
                            <Skills
                            nextSteps={this.nextSteps}
                            prevSteps={this.prevSteps}
                            handleChange={this.handleChange}
                            values={values}
                            />

                        )
                        case 5:
                        return(
                            <Confirm
                            nextSteps={this.nextSteps}
                            prevSteps={this.prevSteps}
                            values={values}
                            />

                        )
                        case 6:
                            return(
                                <CreateResume
                                values={values}
                                />
                            )
                        
                 }
                }
}

export default UserForm;
