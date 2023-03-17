import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, InputAdornment, Checkbox, Stack, Divider, SvgIcon } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, red, grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Visibility } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@emotion/react';
import Link from '@mui/material/Link';
import { validateEmail, validatePassword } from '../../utils/validations';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    pri: {
      main: red[500],
    },
    secondry: {
      main: blue[900],
    },
    info: {
      main: blue[500],
    },
  },
});

const DefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
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
    <Container maxWidth="0">
      <Grid container spacing={2} sx={{ display: 'flex', height: '100vh' }}>
        <Box
          item
          component="Grid"
          lg={5}
          sx={{
            boxShadow: 2,
            p: 1,
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h3" mt={18} mb={4} px={4} textAlign="left">
            Hi, Welcome Back
          </Typography>
          <img src="/assets/illustrations/illustration_login.png" alt="login" />
        </Box>
        <Grid item lg={5} sx={{ margin: 'auto' }}>
          <Stack>
            <Typography component="h1" variant="h4" pt={13} textAlign="left">
              Sign in to Minimal
            </Typography>
          </Stack>
          <Stack pt={2}>
            <Typography variant="body2" mt="1" textAlign="left">
              Don't have an account?
              <Link href="/signup" variant="subtitle2">
                Get started
              </Link>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between" mt={4}>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" sx={{ px: 9, py: 1.5 }}>
                <SvgIcon>
                  <GoogleIcon color="pri" />
                </SvgIcon>
              </Button>
              <Button variant="outlined" sx={{ px: 9, py: 1.5 }}>
                <SvgIcon>
                  <FacebookOutlinedIcon color="secondry" />
                </SvgIcon>
              </Button>
              <Button variant="outlined" sx={{ px: 9, py: 1.5 }}>
                <SvgIcon>
                  <InstagramIcon color="info" />
                </SvgIcon>
              </Button>
            </ThemeProvider>
          </Stack>
          <Stack mt={4}>
            <Divider>
              <Typography variant="body2">OR</Typography>
            </Divider>
          </Stack>
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
            InputProps={{
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
