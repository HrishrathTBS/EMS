import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, InputAdornment, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const useStyles = styled({
  flexboxcenter: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  flexboxspace: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    width: '80%',
  },
  color: {
    color: 'primary',
  },
  w90: {
    width: '75%',
  },
});

// const StyledContent = styled('div')(({ theme }) => ({
//   maxWidth: 800,
//   color:'primary',
//   margin: 'auto',
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: theme.spacing(12, 0),
// }));

const LoginByDev = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'}>
      {/* <StyledContent > */}
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          mt: '2',
          height: '100vh',
        }}
      >
        <Grid item lg={6}>
          <img src="/assets/illustrations/illustration_login.png" alt="login" />
        </Grid>
        <Grid item columnSpacing={1} lg={5}>
          <Box pb={2} mt={2}>
            <TextField
              className={classes.color}
              fullWidth
              // label="Email"
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <TextField
            className={classes.w90}
            // error
            fullWidth
            placeholder="Password"
            // label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon aria-label="toggle password visibility" />
                </InputAdornment>
              ),
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: '100%',
              mt: 2,
            }}
          >
            <Checkbox name="remember" label="Remember me" />
            <Typography variant="subtitle2" underline="hover">
              Forgot password?
            </Typography>
          </Box>
          <Box mt={2}>
            <Button variant="contained">Sign in</Button>
          </Box>
        </Grid>
      </Grid>

      {/* </StyledContent> */}
    </Container>
  );
};

export default LoginByDev;
