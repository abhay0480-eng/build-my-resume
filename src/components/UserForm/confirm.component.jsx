import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
             experienceYear}}= this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                        />
                        <ListItem
                        primaryText="Phone Number "
                        secondaryText={phoneNumber}
                        />
                        <ListItem
                        primaryText="Pin Code"
                        secondaryText={pincode}
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText="Address"
                        secondaryText={address}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={city}
                        />
                        <ListItem
                        primaryText="State"
                        secondaryText={state}
                        />
                        <ListItem
                        primaryText="Country"
                        secondaryText={country}
                        />
                        <ListItem
                        primaryText="School/College Name"
                        secondaryText={school}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={schoolCity}
                        />
                        <ListItem
                        primaryText="State"
                        secondaryText={schoolState}
                        />
                        <ListItem
                        primaryText="Degree"
                        secondaryText={Degree}
                        />
                        <ListItem
                        primaryText="Field of study"
                        secondaryText={fieldofstudy}
                        />
                        <ListItem
                        primaryText="Year Of Passing"
                        secondaryText={graduationDate}
                        />
                        <ListItem
                        primaryText="Skills"
                        secondaryText={skills}
                        />
                        <ListItem
                        primaryText="Projects"
                        secondaryText={projects}
                        />
                        <ListItem
                        primaryText="Job Title"
                        secondaryText={jobTitle}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={jobCity}
                        />
                        <ListItem
                        primaryText="Company Name"
                        secondaryText={employer}
                        />
                        <ListItem
                        primaryText="Years Of Experience"
                        secondaryText={experienceYear}
                        />
                        
                    </List>
                   
                    
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