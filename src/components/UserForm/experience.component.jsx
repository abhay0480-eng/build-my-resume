import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Experience extends React.Component {
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
                <h1>Experience: </h1>
                    <TextField
                    hintText="Enter your Job Title"
                    floatingLabelText="Job Title"
                    style = {styles.button}
                    onchange={handleChange('jobTitle')}
                    defaultValues={values.jobTitle}
                    />
                    <TextField
                    hintText="Enter Company Name"
                    floatingLabelText="Employer"
                    style = {styles.button}
                    onchange={handleChange('employer')}
                    defaultValues={values.employer}
                    />
                    <br/>
                    <TextField
                    hintText="Enter City Name"
                    floatingLabelText="City"
                    style = {styles.button}
                    onchange={handleChange('jobCity')}
                    defaultValues={values.jobCity}
                    />
                    <TextField
                    hintText="Enter your city Name"
                    floatingLabelText="City "
                    style = {styles.button}
                    onchange={handleChange('city')}
                    defaultValues={values.city}
                    />
                    <TextField
                    hintText="Enter Years of Experience"
                    floatingLabelText="Years of Experience"
                    type="number"
                    style = {styles.button}
                    onchange={handleChange('experienceYear')}
                    defaultValues={values.experienceYear}
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

export default Experience;

