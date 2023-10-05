import React, { useState } from 'react';
import './Login.css';
import myjumia from '../../images/myjumia-top-logo.png';
import { useEmail } from '../../context/email';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email:'',
    password:'',
  });
  const { setEmail } = useEmail();


  // mananging the state of the email and password not field error 
   // State for error message
   const [error, setError] = useState('');


// creating a function to handle the change in input of the items 

  const handleInputChange = (e) => {
  const {name, value} = e.target;
  setInputValue({
    ...inputValue,
    [name]: value,
  })
    setEmail(value);
  };


  // this is the function handling submit of the form 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Your form submission logic goes here
try{
const response =await  fetch('http://localhost:5000/auth/signin',{
  method: 'POST',
  headers:{
    'content-type': 'application/json',
  },
  body: JSON.stringify(inputValue),
});
  if(response.status===200){
console.log("User is successfully signed in");
window.location.href='/';
}else if(response.status===401){
console.log("There is no email account ");
setError('There is no email account please sign up ');
window.location.href='/signup';
}else if(response.status===403){
  setError('Incorrect password. Please try again.');
}
else{
  const data =await response.json();
 console.log("Error logging in user:",data.error);
 setError('Incorrect password. Please try again.'); 
}
}catch(error){
console.log('An error occurred',error);
}

  };

const {email}=useEmail();
setEmail(inputValue.email);

  return (
    <Container component="main" maxWidth="lg" style={{ height: '80vh' }}>
      <div className="login_master_container">
        <div className="login_text_container">
          <img src={myjumia} alt="Jumia Logo" height={55} width={55} />
          <Typography component="h2" variant="h5">
            Welcome to Jumia
          </Typography>
          <Typography variant="body2">
            Type your e-mail or phone number to log in or create a Jumia{' '}
            <span>account.</span>
          </Typography>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            required
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Enter your password"
            autoFocus
            required
            type="password"
            name='password'
            onChange={handleInputChange}
            style={{ marginBottom: '20px' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginBottom: '50px' }}
          >
            Continue
          </Button>
          {error && error === 'Incorrect password. Please try again.' && (
  <Typography variant="body2" color="error" sx={{
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      sm: 'row',
    },
    alignItems: 'center',
  }}>
    {error}
    <Link to={`/auth/resetpassword/otp/${email}`}>Forgot Password</Link>
  </Typography>
)}

        </form>
      </div>
    </Container>
  );
};

export default Login;
