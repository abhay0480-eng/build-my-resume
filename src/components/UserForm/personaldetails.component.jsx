import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './form.css';

class PersonalDetails extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextSteps();
    }
    
    render() {
        
        
        const {values, handleChange } = this.props;
        return (
            <div className="container ">

           <form>
           <MuiThemeProvider>
                
                    <h1>Personal Details: </h1>
                    <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    style = {styles.button}
                  
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                   
                    
                    />
                    <TextField
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    style = {styles.button}
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter your Address"
                    floatingLabelText="Address"
                    style = {styles.button}
                    onChange={handleChange('address')}
                    defaultValue={values.address}
                    />
                    <TextField
                    hintText="Enter your city Name"
                    floatingLabelText="City "
                    style = {styles.button}
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    />
                    <TextField
                    hintText="Enter your State Name"
                    floatingLabelText="State"
                    style = {styles.button}
                    onChange={handleChange('state')}
                    defaultValue={values.state}
                    />
                    <TextField
                    hintText="Enter your Country Name"
                    floatingLabelText="Country"
                    style = {styles.button}
                    onChange={handleChange('country')}
                    defaultValue={values.country}
                    />
                    <TextField
                    hintText="Enter your Pin Code"
                    floatingLabelText="Pin Code"
                    type="number"
                    style = {styles.button}
                    onChange={handleChange('pincode')}
                    defaultValue={values.pincode}
                    />
                    <br/>
                    <TextField
                    hintText="Enter your E-mail"
                    floatingLabelText="E-mail"
                    style = {styles.button}
                    type="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <TextField
                    hintText="Enter your Phone Number"
                    floatingLabelText="Phone Number"
                    style = {styles.button}
                    onChange={handleChange('phoneNumber')}
                    defaultValue={values.phoneNumber}
                    />
                    <br/>
                    <RaisedButton
                    label="Save & Continue"
                    primary={true}
                    style = {styles.button}
                    onClick={this.continue}
                    />
                
            </MuiThemeProvider>
            </form>
            </div>
           
        )
    }
}

const styles = {
    button:{
        margin: 20
        
    }
}

export default PersonalDetails;
