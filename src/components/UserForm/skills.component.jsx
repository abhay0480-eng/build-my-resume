import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Skills extends React.Component {
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
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                    hintText="Enter your Skills"
                    floatingLabelText="Skills"
                    style = {styles.button}
                    onchange={handleChange('skills')}
                    defaultValues={values.skills}
                    />
                    <TextField
                    hintText="Enter Your Project Name"
                    floatingLabelText="Projects"
                    style = {styles.button}
                    onchange={handleChange('projects')}
                    defaultValues={values.projects}
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
           
        )
    }
}

const styles = {
    button:{
        margin: 20
        
    }
}

export default Skills;