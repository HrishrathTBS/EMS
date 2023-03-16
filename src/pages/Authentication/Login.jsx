import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, InputAdornment, Checkbox, Paper, Stack, Divider, SvgIcon } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '@emotion/react';
import { validateEmail, validatePassword } from '../../utils/validations';

const useStyles = styled({
  flexboxcenter: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100vh',
  },
  widthmax: {
    maxWidth: '400',
  },
});

const DefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const { commonClasses } = useTheme();

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
    <Container maxWidth={'lg'}>
      <Grid container className={classes.flexboxcenter}>
        <Paper component="Grid" item lg={6}>
          <img src="/assets/illustrations/illustration_login.png" alt="login" />
        </Paper>
        <Grid item columnSpacing={1} lg={6} sx={{ mx: 'auto' }}>
          <Stack pt={4}>
            <Typography component="h1" variant="h4" mt="1" textAlign="left">
              Sign in to Minimal
            </Typography>
          </Stack>
          <Stack pt={2}>
            <Typography variant="subtitle2" mt="1" textAlign="left">
              Don't have an account? Get started
            </Typography>
          </Stack>
          <Stack className={classes.flexbox} direction="row" spacing={1} justifyContent="space-between" mt={4}>
            <Button variant="outlined" sx={{ px: 5, py: 1 }}>
              <SvgIcon>
                <GoogleIcon />
              </SvgIcon>
            </Button>
            <Button variant="outlined" sx={{ px: 5, py: 1 }}>
              <SvgIcon>
                <GoogleIcon />
              </SvgIcon>
            </Button>
            <Button variant="outlined" sx={{ px: 5, py: 1 }}>
              <SvgIcon>
                <GoogleIcon />
              </SvgIcon>
            </Button>
          </Stack>
          <Stack mt={4}>
            <Divider>OR</Divider>
          </Stack>
          <Stack pb={2} mt={4}>
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
          </Stack>

          <TextField
            className={classes.w90}
            type={showPassword ? 'text' : 'password'}
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
                <InputAdornment
                  position="end"
                  className={commonClasses.cPointer}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
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
              Forgot password?
            </Typography>
          </Box>
          <Box mt={2}>
            <Button variant="contained" onClick={onSubmit}>
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
