import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Stack, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: '#546ab9 !important',
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  main_root: {
    backgroundColor: 'white',
    padding: '20px 20px',
    borderRadius: '5px',
  },
  MuiFormControlroot: {
    width: '50%',
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, cpassword);
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.main_root}>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="First Name"
            variant="outlined"
            required
            className={classes.MuiFormControlroot}
            value={firstName}
            pl={2}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            required
            className={classes.MuiFormControlroot}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} mt={2}>
          <TextField
            label="confirm password"
            variant="outlined"
            type="password"
            required
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </Stack>
        <Stack mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default SignUp;
