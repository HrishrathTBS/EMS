import React, { useState } from 'react';
import { Box, Typography, InputAdornment, Checkbox, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { validateEmail, validatePassword } from '../../utils/validations';
import useClasses from '../../theme/classes';

const DefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
  const classes = useClasses();
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

    const emailError = validateEmail(tempErrors.email);
    const pwdError = validatePassword(tempErrors.password);
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
    setValues(DefaultValues);
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
          <Link href="/forgetpwd" variant="subtitle2" underline="none">
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
