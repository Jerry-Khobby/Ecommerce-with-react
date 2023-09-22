import React, { useState } from 'react';
import myjumia from '../../images/myjumia-top-logo.png';
import { Link } from 'react-router-dom';
import './newaccount.css'; // Note: Ensure that the CSS file name matches your component name
import { useEmail } from '../../context/email';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const NewAccount = () => {
  const [inputs, setInputs] = useState({
    password1: '',
    password2: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { password1, password2 } = inputs;
  };

  const { email } = useEmail();

  return (
    <Container component="main" maxWidth="lg" style={{height:'80vh'}}>
      <div className="login_master_container">
        <div className="login_text_container">
          <img src={myjumia} alt="Jumia Logo" height={55} width={55} />
          <Typography variant="h4">Create your account</Typography>
          <Typography variant="body1" style={{marginBottom:'15px'}}>
            Let's get started by creating your account. To keep your account
            safe, we need a strong password
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                label="Email"
                value={email}
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Link to="/signin" style={{ fontSize: 13, textDecoration: 'none', color: 'orange' }}>
                Edit
              </Link>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="name"
                name="first_name"
                label="Enter your first name"
                required
                value={inputs.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="name"
                name="other_names"
                label="Enter your other names"
                required
                value={inputs.name2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                name="password1"
                label="Password"
                required
                value={inputs.password1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                name="password2"
                label="Confirm Password"
                required
                value={inputs.password2}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className="continue_button">
            <Link to="/" style={{textDecoration:'none'}}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ cursor: 'pointer',marginTop:'10px' }}
              >
                Continue
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewAccount;
