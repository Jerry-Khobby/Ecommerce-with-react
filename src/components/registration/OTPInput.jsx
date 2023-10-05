import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container, Typography, Box } from '@mui/material';
import { useEmail } from '../../context/email';
import { Link } from 'react-router-dom';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '','']);
  const [seconds, setSeconds] = useState(11);
  const [showResendMessage, setShowResendMessage] = useState(false);
  const { email } = useEmail();
  const [error, setError] = useState('');


  
  const handleOtpChange = (index, value) => {
    if(/^\d?$/.test(value)){
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move focus to the next input box if the value is not empty
    if (value && index < updatedOtp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
    }
  
  };


  //fetching the email from the backend first 
  useEffect(()=>{
    async function sendOtpEmail(){
      try{
const response =await fetch(`http://localhost:5000/auth/resetpassword/otpgenerate/${email}`,{
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});
if(response.status===201){
  console.log('OTP email sent successfully');
}else{
  console.error('Error sending OTP email');

}}catch(e){
        console.error('An error occurred while sending OTP email:', e);
      }
    }
    sendOtpEmail();
  },[email]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    // Handle OTP verification logic here
    const code =otp.join('');
    console.log(code);
    try{
const response =await fetch(`http://localhost:5000/auth/resetpassword/otp/${email}`,{
method: 'POST',
headers:{
  'Content-Type': 'application/json',
},
body: JSON.stringify({code}),
});
if(response.status===200){
  console.log('User account created successfully verified with the code ');
  window.location.href=`/auth/resetpassword/${email}`;
  if(response.status===401){
    console.log('User not found');
    setError('User not found');
  }
}else{
  const data = await response.json();
  console.error('Error creating user account:', data.error);
}
   }catch(e){
      console.log('An error occured:',e);
    }
    
  };

  const handleResendCode = () => {
    // Reset the timer and hide the resend message
    setSeconds(11);
    setShowResendMessage(false);
  };

  useEffect(() => {
    let timerId;
    if (seconds > 0) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      setShowResendMessage(true);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [seconds]);

  

  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '45px', height: '100vh' }}>
      <Box
        sx={{
          textAlign: 'center',
          padding: 4,
          border: '2px solid transparent', // Set border to transparent
          borderRadius: '20px',
          boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
          height: '65vh',
          width: '30vw',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" mb={4} sx={{
           '@media (max-width: 380px)': {
            fontSize: '19px',
          },
          '@media (max-width: 340px)': {
            fontSize: '19px',
          },
          '@media (max-width: 300px)': {
            fontSize: '17px',
          },
         
        }}>
          Enter OTP Code
        </Typography>
        <Typography variant="p" mb={4}>
          We have sent a code to your email {email}
        </Typography>
        <form onSubmit={handleSubmit} method='POST'>
          <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center" textAlign="center">
            {otp.map((digit, index) => (
              <Grid item key={index} xs={2} md={2} lg={2} xl={2}>
                <TextField
                  variant="outlined"
                  margin="none"
                  required
                  fullWidth
                  id={`otp-${index}`}
                  label="Digit"
                  name={`otp-${index}`}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  sx={{
                    width: '100%',
                    height: '70px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '30px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    '@media(max-width:400px)':{
                      height:'60px',
                      fontSize: '24px', 
                    },
                    '@media (max-width: 350px)': {
                      height: '50px',
                      fontSize: '24px',  // Further decrease height for screens <= 350px width
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, fontSize: '18px', backgroundColor: '#2196F3', color: '#fff' }}
          >
           {/*  <Link to={`/auth/resetpassword/:${email}`} style={{
              textDecoration: 'none',
              color:'inherit',
            }}> */}
            Verify Account
           {/*  </Link> */}
          </Button>
        </form>
        {showResendMessage ? (
          <Typography variant="p" mb={4} marginTop={2}>
            Didn't receive code? <Link to="/auth/resetpassword/otp" onClick={handleResendCode}>Resend code</Link>
          </Typography>
        ) : (
          <Typography variant="p" marginTop={2} mb={4}>
            Resend code in {seconds} seconds
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default OtpInput;
