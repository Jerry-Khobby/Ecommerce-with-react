import React, { useState } from 'react';
import './Login.css';
import myjumia from '../../images/myjumia-top-logo.png';
import { Link } from 'react-router-dom';
import { useEmail } from '../../context/email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const { setEmail } = useEmail();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <Container component="main" maxWidth="lg" style={{height:'80vh'}}>
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
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={inputValue}
            onChange={handleInputChange}
            style={{ marginBottom: '20px', width: '' }}
          />
          <Link to="/signup" style={{textDecoration:'none'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{marginBottom:'50px',width: ''}}
            >
              Continue
            </Button>
          </Link>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<FacebookIcon />}
            className="facebook-button"
            style={{marginBottom:'50px'}}
          >
            Log in with Facebook
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
