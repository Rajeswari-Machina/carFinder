import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function CarDetails({ toggleTheme, mode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: mode === 'dark' ? 'black' : 'white',
        color: mode === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
        marginTop: "6%"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Car Details
      </Typography>
      <Card
        sx={{
          maxWidth: 600,
          boxShadow: 3,
          backgroundColor: mode === 'dark' ? '#444' : '#fff',
          color: mode === 'dark' ? '#fff' : '#000',
          "&:hover": {
            transform: "scale(1.02)",
            transition: "transform 0.2s ease-in-out",
          }
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="/images/car2.jpg"
          alt="Car Image"
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Car Name
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            This is a detailed description of the car. It includes specifications, features, and other relevant details.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Typography variant="h6" color="primary">
              $25,000
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}