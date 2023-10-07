import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
/* import { useNavigate } from 'react-router-dom'; */
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
const [inputValue,setInputValue]=useState({
  newPassword:'',
  confirmPassword:'',
})
  const [error, setError] = useState('');
  const {email}=useParams();


  /// grabing the current the email from the context 

 const handleInputChange=(e)=>{
  const {name,value}=e.target;
setInputValue({
  ...inputValue,
  [name]:value,
})
 }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  try {
const response = await fetch(`http://localhost:5000/auth/resetpassword/${email}`,{
method: 'POST',
headers:{
    'content-type':'application/json',
},
body: JSON.stringify(inputValue),
});
const data = await response.json();
  console.log("Response data:", data);
  if (response.status===200) {
  console.log("User's password have been updated  successfully");
  window.location.href='/';
  }else if(response.status===400){
console.log("Passwords do not match with password");
setTimeout(()=>{
  setError("The password you entered does not match ");
},4000);
  }else if(response.status===404){
console.log("User was not found in the database");
setTimeout(()=>{
  setError("Sorry the user account was found in the database go back and create an account");
},4000);
}else{
  console.log("Error resettin password of the user,",data.error);
}
}catch(e){
console.log("Error in resetting password",e);
setTimeout(() => {
    setError('An error occurred while resetting the password. Please try again');
  },4000);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <div>
        <Typography component="h2" variant="h5">
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit} method='POST'>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="New Password"
            type="password"
            required
            name='newPassword'
            onChange={handleInputChange}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Confirm Password"
            type="password"
            required
            name='confirmPassword'
            onChange={handleInputChange}
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
            style={{ marginBottom: '20px' }}>
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
