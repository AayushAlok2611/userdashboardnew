import React, { Component ,useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import  {Axios} from './Axios';

function UserDetailsComponent() {
  const [orgName,setOrgName] = useState('');
  const [regNo,setRegNo] = useState(0);
  const [address,setAddress] = useState('');
  const [adminName,setAdminName] = useState('');
  const [eID,setEID] = useState(0);

  //add in sign up part(Integrate the 2 react apps)

  const submitHandler = (e) => {
    e.preventDefault();
    Axios({
      method: 'POST',
      url: '/api/users/verify',
      data: { userId: 'kunal', lisenceCode: 'abcde' }
    }).then((resp) => { 
      console.log(resp)
    }).catch(err => {
      console.log(err);
    })
}
  return (
    <div className="UplaodForm">
        <br /><br />   
        <h1>Welcome to the Surveillance System</h1>
        <br /> <br />
        <MuiThemeProvider>
            <React.Fragment>
            <TextField
              id="OrganisationName" 
              label="Name of Organisation"
              value = {orgName}
              onChange ={e=>{setOrgName(e.target.value)}}
            />
            <br /> <br />
            <TextField
              id="RegistrationNumber" 
              label="Registration Number"
              defaultValue = {regNo}
              onChange ={e=>setRegNo(e.target.value)}
            />
            <br /><br />
            <TextField
              id="Address" 
              label="Address"
              value = {address}
              onChange ={e=>setAddress(e.target.value)}
            />
            <br /><br />
            <TextField
              id="AdminName" 
              label="Administrator name"
              value = {adminName}
              onChange ={e=>setAdminName(e.target.value)}
            />
           <br /><br />
            <TextField
              id="EmployeeID" 
              label="Employee ID"
              value = {eID}
              onChange ={e=>setEID(e.target.value)}
            />
            <br /><br />
            <RaisedButton>Submit</RaisedButton>
            </React.Fragment>
            </MuiThemeProvider>
    </div>
  )
}

export default UserDetailsComponent;

