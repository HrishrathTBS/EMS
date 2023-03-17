import React, { useState } from 'react';
import { InputAdornment, Typography, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { IsEmpty, validateEmail, validatePassword } from '../../utils/validations';

const useStyles = styled({
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
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',

        width: '100%',
        mt: '2',
        height: '100vh',
      }}
    >
      <Stack
        item
        component="Grid"
        lg={5}
        sx={{
          boxShadow: 2,
          p: 1,
        }}
      >
        <Typography component="h1" variant="h3" mt={10} px={4} textAlign="left">
          Hi, Welcome to Minimul
        </Typography>
        <img src="/assets/illustrations/bg.png" alt="login" />
      </Stack>
      <Grid item lg={5} sx={{ margin: 'auto' }}>
        <Stack>
          <Typography component="h1" variant="h4" pt={8} textAlign="left">
            Sign Up to Minimal
          </Typography>
        </Stack>
        <Stack pb={2} mt={2}>
          <TextField
            className={classes.w90}
            fullWidth
            name="firstName"
            label="First Name"
            onChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
            helperText={errors.firstName}
          />
        </Stack>

        <Stack pb={2} mt={2}>
          <TextField
            className={classes.w90}
            fullWidth
            name="lastName"
            label="Last Name"
            onChange={handleChange}
            value={values.lastName}
            error={errors.lastName}
            helperText={errors.lastName}
          />
        </Stack>
        <Stack pb={2} mt={2}>
          <TextField
            className={classes.color}
            fullWidth
            name="email"
            label="Email"
            onChange={handleChange}
            value={values.email}
            error={errors.email}
            helperText={errors.email}
          />
        </Stack>

        <Stack pb={2} mt={2}>
          <TextField
            className={classes.w90}
            type={show.pwd ? 'text' : 'password'}
            fullWidth
            name="password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            InputProps={{
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
        </Stack>
        <Stack pb={2} mt={2}>
          <TextField
            className={classes.w90}
            type={show.cPwd ? 'text' : 'password'}
            fullWidth
            name="cPassword"
            label="Confirm Password"
            onChange={handleChange}
            value={values.cPassword}
            InputProps={{
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
        </Stack>
        {/* <Stack
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: '100%',
              mt: 2,
            }}
          >
            <CheckStack name="remember" label="Remember me" />
            <Typography variant="subtitle2" underline="hover">
              Forgot password?
            </Typography>
          </Stack> */}
        <Stack mt={2} pb={12}>
          <Button variant="contained" onClick={onSubmit} fullWidth sx={{ p: 1 }}>
            Sign up
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Signup;
