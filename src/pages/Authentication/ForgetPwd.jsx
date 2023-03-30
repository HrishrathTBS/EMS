import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import useClasses from '../../theme/classes';
import { validateEmail } from '../../utils/validations';

const DefaultValues = { email: '' };
const Pwd = () => {
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({ email: '' });
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
    if (emailError) {
      tempErrors = { ...tempErrors, email: emailError };
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
      <Box mt={2} pb={12}>
        <Button variant="contained" onClick={onSubmit} fullWidth sx={{ p: 1 }}>
          Send Instruction
        </Button>
      </Box>
      <Typography variant="subtitle2" underline="hover" pt={2}>
        Go back to
        <Link href="/login" variant="subtitle2" underline="none">
          {' '}
          Login page
        </Link>
      </Typography>
    </>
  );
};
export default Pwd;
