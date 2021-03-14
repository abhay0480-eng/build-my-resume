import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserEducation extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextSteps();
    }
    back = e => {
        e.preventDefault();
        this.props.prevSteps();
    }
    
    render() {
        const {values, handleChange}= this.props;
        return (
            <form>
            <MuiThemeProvider>
                <React.Fragment>
                <h1>Education: </h1>
                    <TextField
                    hintText="Enter your School/College Name"
                    floatingLabelText="School/College"
                    style = {styles.button}
                    onchange={handleChange('school')}
                    defaultValues={values.school}
                    />
                    <TextField
                    hintText="Enter City Name"
                    floatingLabelText="City"
                    style = {styles.button}
                    onchange={handleChange('schoolCity')}
                    defaultValues={values.schoolCity}
                    />
                   
                    <TextField
                    hintText="Enter State Name"
                    floatingLabelText="State"
                    style = {styles.button}
                    onchange={handleChange('schoolState')}
                    defaultValues={values.schoolState}
                    />
                    
                   <br/>
                    <TextField
                    hintText="Enter your Degree"
                    floatingLabelText="Degree"
                    style = {styles.button}
                    onchange={handleChange('Degree')}
                    defaultValues={values.Degree}
                    />
                    <TextField
                    hintText="Enter Field of Study"
                    floatingLabelText="Field of Study"
                    type="text"
                    style = {styles.button}
                    onchange={handleChange('fieldofstudy')}
                    defaultValues={values.fieldofstudy}
                    />
                    <br/>
                    <TextField
                    hintText="Enter your Pass Out Year"
                    floatingLabelText="Year of Pass Out"
                    style = {styles.button}
                    type="number"
                    onchange={handleChange('graduationDate')}
                    defaultValues={values.graduationDate}
                    />
                    
                    <br/>
                    <RaisedButton
                    label="Save & Continue"
                    primary={true}
                    style = {styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style = {styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
            </form>
           
        )
    }
}

const styles = {
    button:{
        margin: 20
        
    }
}

export default UserEducation;

