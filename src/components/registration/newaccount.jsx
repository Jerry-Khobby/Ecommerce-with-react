import React, { useState} from 'react';
import myjumia from '../../images/myjumia-top-logo.png';
import './newaccount.css'; // Note: Ensure that the CSS file name matches your component name
import { TextField, Button, Container, Typography, Grid } from '@mui/material';






const NewAccount = () => {
  /* const {email}=useEmail(); */
  const [inputs, setInputs] = useState({
    email: '',
    first_name: '',
    other_names: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
    try{
      const response =await fetch('http://localhost:5000/auth/signup',{
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(inputs),
      });
      if(response.status===201){
        console.log('User account created successfully');
        window.location.href='/';
      }else{
        const data = await response.json();
      console.error('Error creating user account:', data.error);
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
          <Typography variant="h4">Create your account</Typography>
          <Typography variant="body1" style={{ marginBottom: '15px' }}>
            Let's get started by creating your account. To keep your account
            safe, we need a strong password
          </Typography>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                label="Email"
                /* InputProps={
                  {
                    readOnly: true,
                  }
                } */
                 value={inputs.email}
                onChange={handleChange}
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="first_name"
                label="Enter your first name"
                required
                value={inputs.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="other_names"
                label="Enter your other names"
                required
                value={inputs.other_names}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ cursor: 'pointer', marginTop: '10px' }}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewAccount;
