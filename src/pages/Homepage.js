import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography, Box, Paper } from '@mui/material';
// import Paper from 'src/theme/overrides/Paper';
const Homepage = () => {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Channel dashboard
        </Typography>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} height="500">
          <Box>
            <Paper sm={{ p: 2 }}>uiefhsieh</Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sm={{ bgcolor: 'grey' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sm={{ bgcolor: 'grey' }} />
        </Grid>
      </Grid>
    </>
  );
};
export default Homepage;
