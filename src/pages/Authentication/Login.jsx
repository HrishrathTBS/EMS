import React, { useState } from 'react';
import { Box, Typography, InputAdornment, Checkbox, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validations';
import useClasses from '../../theme/classes';
import { login } from '../../API/auth';

const DefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
  const classes = useClasses();
  const navigate = useNavigate();
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = { ...errors };
    let valid = true;

    console.log('VAlues: ', values);

    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);

    console.log('emailError: ', emailError);
    console.log('pwdError: ', pwdError);

    if (emailError) {
      tempErrors = { ...tempErrors, email: emailError };
      valid = false;
    }
    if (pwdError) {
      tempErrors = { ...tempErrors, password: pwdError };
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
    // setValues(DefaultValues);
    login();
    navigate('/dashboard/user');
    return true;
  };

  return (
    <>
      <Stack pb={2} mt={4}>
        <TextField
          fullWidth
          name="email"
          label="Email"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
          helperText={errors.email}
        />
      </Stack>

      <TextField
        type={showPassword ? 'text' : 'password'}
        fullWidth
        name="password"
        label="Password"
        onChange={handleChange}
        value={values.password}
        defaultValue=""
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
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
        <Typography variant="subtitle2" underline="hover" pt={2}>
          <Link href="#" variant="subtitle2" underline="none">
            Forgot password?
          </Link>
        </Typography>
      </Box>
      <Box mt={2} pb={12}>
        <Button variant="contained" onClick={onSubmit} fullWidth sx={{ p: 1 }}>
          Sign in
        </Button>
      </Box>
    </>
  );
};

export default Login;
