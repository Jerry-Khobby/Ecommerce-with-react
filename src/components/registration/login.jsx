import React, { useState } from 'react';
import './Login.css';
import myjumia from '../../images/myjumia-top-logo.png';
import { useEmail } from '../../context/email';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email:'',
    password:'',
  });
  const { setEmail } = useEmail();

  const handleInputChange = (e) => {
  const {name, value} = e.target;
  setInputValue({
    ...inputValue,
    [name]: value,
  })
    setEmail(inputValue.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    try{
      const response =await fetch("http://localhost:5000/auth/signin",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(inputValue),
      });
      if(response.ok){
        console.log('Login successful');
      }else{
        const data = await response.json();
        console.error('There is an error loggin:', data.error);
      }
    }catch(error){
      console.log('An error occured:',error);
    }
  };

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
        <form onSubmit={handleSubmit} method='POST'>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            required
            autoComplete="email"
            value={inputValue.email}
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
            value={inputValue.password}
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
        </form>
      </div>
    </Container>
  );
};

export default Login;
