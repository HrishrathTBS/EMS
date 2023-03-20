import React, { useState } from 'react';
import { InputAdornment, Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { IsEmpty, validateEmail, validatePassword } from '../../utils/validations';
import useClasses from '../../theme/classes';

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
  const localClasses = useStyles();
  const navigate = useNavigate();
  const classes = useClasses();
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
  });

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
    setValues(DefaultValues);
    return true;
  };

  return (
    <>
      <Stack py={1}>
        <TextField
          className={localClasses.w90}
          fullWidth
          name="firstName"
          label="First Name"
          onChange={handleChange}
          value={values.firstName}
          error={errors.firstName}
          helperText={errors.firstName}
        />
      </Stack>

      <Stack py={1}>
        <TextField
          className={localClasses.w90}
          fullWidth
          name="lastName"
          label="Last Name"
          onChange={handleChange}
          value={values.lastName}
          error={errors.lastName}
          helperText={errors.lastName}
        />
      </Stack>
      <Stack py={1}>
        <TextField
          className={localClasses.color}
          fullWidth
          name="email"
          label="Email"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
          helperText={errors.email}
        />
      </Stack>

      <Stack py={1}>
        <TextField
          className={localClasses.w90}
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
                  <Visibility aria-label="toggle password visibility" className={classes.cPointer} />
                ) : (
                  <VisibilityOffIcon aria-label="toggle password visibility" className={classes.cPointer} />
                )}
              </InputAdornment>
            ),
          }}
          error={errors.password}
          helperText={errors.password}
        />
      </Stack>
      <Stack py={1}>
        <TextField
          className={localClasses.w90}
          type={show.cPwd ? 'text' : 'password'}
          fullWidth
          name="cPassword"
          label="Confirm Password"
          onChange={handleChange}
          value={values.cPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={() => setShow({ ...show, cPwd: !show.cPwd })}>
                {show.cPwd ? (
                  <Visibility aria-label="toggle cPassword visibility" className={classes.cPointer} />
                ) : (
                  <VisibilityOffIcon aria-label="toggle cPassword visibility" className={classes.cPointer} />
                )}
              </InputAdornment>
            ),
          }}
          error={errors.cPassword}
          helperText={errors.cPassword}
        />
      </Stack>
      <Stack mt={2}>
        <Typography variant="body2" underline="hover" align="end" onClick={() => navigate('/login')}>
          Already have an account?{' '}
          <Link href="/login" variant="subtitle2">
            Sign in
          </Link>
        </Typography>
      </Stack>
      <Stack mt={2}>
        <Button variant="contained" onClick={onSubmit} fullWidth sx={{ p: 1 }}>
          Sign up
        </Button>
      </Stack>
    </>
  );
};

export default Signup;
