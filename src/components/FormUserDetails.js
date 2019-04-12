import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter User Details"/>
            <TextField 
            hintText="Enter your First name"
            floatingLabelFixed="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <br/>
            <TextField 
            hintText="Enter your Last name"
            floatingLabelFixed="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            />
            <br/>
            <TextField 
            hintText="Enter your Email"
            floatingLabelFixed="email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            />
            <br/>
            <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />


        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
