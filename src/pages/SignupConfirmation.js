import * as React from 'react';
import './Signup.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InsightsIcon from '@mui/icons-material/Insights';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function SignupConfirmation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <InsightsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            You have Successfully Sign up! 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            
            <Link href="/login" variant="body1">
            Login here and Start building your sweet home
                </Link>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
       
      </Container>
    
  );
}

export default SignupConfirmation;
