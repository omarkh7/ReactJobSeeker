import '../Css/Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


function Login() {
  const [Email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const handleEmailChange = (e) => {

    setEmailError('');
    setEmail(e.target.value);

  }
  const handlePasswordChange = (e) => {
    setPasswordError('');
    setPassword(e.target.value);

  }


  const handleFormsubmit = (e) => {
    e.preventDefault();

    if (Email === 'omar' && password === 'khankan') {
      alert('Login succefully')
    }
    else {
      if (Email !== 'omar') {
        setEmailError('wrong Email');
      }
      else {
        setEmailError('Email required');
      }

      if (password !== 'khankan') {
        setPasswordError('Wrong Password');
      }
      else {
        setPasswordError('Password Required');
      }
    }


  }
  return (





    <div className='wrapper'>

      <form className='form-group form' autoComplete="off" onSubmit={handleFormsubmit} >

        <br></br>
        <TextField id="outlined-basic" label="Email" onChange={handleEmailChange} value={Email} placeholder="Enter your Email" />
        {emailError && <div className='error-msg'>{emailError}</div>}
        <br></br>
        <br></br>


        <div><TextField id="outlined-basic" label="Password" onChange={handlePasswordChange} onError='red' value={password} placeholder="Enter password " /></div>

        {passwordError && <div className='error-msg'>{passwordError}
        </div>}
        <br></br>
        {<Button variant="contained" type="submit" style={{ width: 100 + '%' }}> LOGIN</Button>}


      </form>
    </div>


  );
}

export default Login;
