import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, InputAdornment, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import { IsEmpty, validateEmail, validatePassword } from '../../utils/validations';

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

const DefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cPassword: '',
};

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
  });
  const { commonClasses } = useTheme();

  const [show, setShow] = useState({ pwd: false, cPwd: false });

  const handleChange = (e) => {
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = { ...errors };
    let valid = true;

    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);
    if (IsEmpty(values.firstName)) {
      tempErrors = { ...tempErrors, firstName: "First name can't be empty" };
      valid = false;
    }
    if (IsEmpty(values.lastName)) {
      tempErrors = { ...tempErrors, lastName: "Last name can't be empty" };
      valid = false;
    }
    if (emailError) {
      tempErrors = { ...tempErrors, email: emailError };
      valid = false;
    }
    if (pwdError) {
      tempErrors = { ...tempErrors, password: pwdError };
      valid = false;
    }
    if (values.cPassword !== values.password) {
      tempErrors = { ...tempErrors, cPassword: "Doesn't match" };
      valid = false;
    }
    setErrors(tempErrors);
    return valid;
  };

  const onSubmit = () => {
    if (!validate()) {
      return false;
    }
    console.log('Submitted', values);
    setValues(DefaultValues);
    return true;
  };

  return (
    <Container maxWidth={'lg'}>
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
              className={classes.w90}
              fullWidth
              name="firstName"
              label="First Name"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstName}
              error={errors.firstName}
              helperText={errors.firstName}
            />
          </Box>

          <Box pb={2} mt={2}>
            <TextField
              className={classes.w90}
              fullWidth
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
              error={errors.lastName}
              helperText={errors.lastName}
            />
          </Box>
          <Box pb={2} mt={2}>
            <TextField
              className={classes.color}
              fullWidth
              name="email"
              label="Email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              error={errors.email}
              helperText={errors.email}
            />
          </Box>

          <Box pb={2} mt={2}>
            <TextField
              className={classes.w90}
              type={show.pwd ? 'text' : 'password'}
              fullWidth
              name="password"
              label="Password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" onClick={() => setShow({ ...show, pwd: !show.pwd })}>
                    {show.pwd ? (
                      <Visibility aria-label="toggle password visibility" />
                    ) : (
                      <VisibilityOffIcon aria-label="toggle password visibility" />
                    )}
                  </InputAdornment>
                ),
              }}
              error={errors.password}
              helperText={errors.password}
            />
          </Box>
          <Box pb={2} mt={2}>
            <TextField
              className={classes.w90}
              type={show.cPwd ? 'text' : 'password'}
              fullWidth
              name="cPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.cPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={commonClasses.cPointer}
                    onClick={() => setShow({ ...show, cPwd: !show.cPwd })}
                  >
                    {show.cPwd ? (
                      <Visibility aria-label="toggle cPassword visibility" />
                    ) : (
                      <VisibilityOffIcon aria-label="toggle cPassword visibility" />
                    )}
                  </InputAdornment>
                ),
              }}
              error={errors.cPassword}
              helperText={errors.cPassword}
            />
          </Box>
          {/* <Box
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
          </Box> */}
          <Box mt={2}>
            <Button variant="contained" onClick={onSubmit}>
              Sign up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
