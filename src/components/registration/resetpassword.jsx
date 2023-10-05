import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
/* import { useNavigate } from 'react-router-dom'; */
import { useEmail } from '../../context/email';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');



  /// grabing the current the email from the context 
  const {email}= useEmail();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');

      setTimeout(() => {
        setError('');
      },4000);
      return;
    }
    //coming to configure that in the frontend of the code 
    try {
const response = await fetch(`http://localhost:5000/auth/resetpassword/${email}`,{
method: 'PUT',
headers:{
    'content-type':'application/json',
},
body: JSON.stringify({newPassword}),
});

  const data = await response.json();
  console.log("Response data:", data);
  if (!response.ok) {
    setError('Password reset failed. Please try again.');
    setTimeout(() => {
        setError('');
      },4000);
    return;
  }

if(response.status===200){
    console.log("Password has been resetted successfully");
    window.location.href='/signin';
}else{
    setError("Sorry Please try again");
    setTimeout(() => {
        setError('');
      },4000);
}
}catch(e){
console.log("Error in resetting password",e);
setError('An error occurred while resetting the password. Please try again later.');
setTimeout(() => {
    setError('');
  },4000);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <div>
        <Typography component="h2" variant="h5">
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit} method='PUT'>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="New Password"
            type="password"
            required
            value={newPassword}
            name='newPassword'
            onChange={handleNewPasswordChange}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleConfirmPasswordChange}
            style={{ marginBottom: '20px' }}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginBottom: '20px' }}
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
