import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useWishlist from '@/hooks/useWishlist';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import data from "@/data/mock/cars.json";
export default function CarDetails({ toggleTheme, mode }) {
  const router = useRouter();
  const { id } = router.query;
  const isDark = mode === 'dark';

  const [wishlist, toggleWishlist] = useWishlist();
  const handleWishlist = (e) => {
    e.preventDefault(); 
    toggleWishlist(car);
  };

  if (!id) return <div className={`p-4 ${isDark ? "text-white" : "text-black"}`}>Loading...</div>;

  const car = data.find((c) => c.id === parseInt(id));
  if (!car) return <div className={`p-4 ${isDark ? "text-white" : "text-black"}`}>Car not found</div>;

  const isWished = wishlist.some((c) => c.id === car.id);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        bgcolor: isDark ? 'black' : 'white',
        color: isDark ? '#fff' : '#000',
        minHeight: '100vh',
        mt: '6%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Car Details
      </Typography>
      <Card
        sx={{
          width: "100%",
          boxShadow: 3,
          bgcolor: isDark ? '#444' : '#fff',
          color: isDark ? '#fff' : '#000',
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'transform 0.2s ease-in-out',
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="/images/car2.jpg"
          alt="Car Image"
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5">
              {car.name}
            </Typography>
            <FavoriteIcon
              sx={{ color: isWished ? 'red' : 'gray', cursor: 'pointer' }}
              onClick={handleWishlist}
            />
          </Box>
          <Typography
            variant="body1"
            color="text.secondary" >
            This is a detailed description of the car. It includes specifications, features, and other relevant details.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              fontStyle: 'italic',
              color: isDark ? 'gray.400' : 'gray.600',
              gutterBottom: true,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              animation: 'typing 4s steps(40, end), blink 0.5s step-end infinite',
              borderRight: '2px solid',
                '@keyframes typing': {
                  from: { width: 0 },
                  to: { width: '100%' },
                },
                '@keyframes blink': {
                  from: { borderColor: 'transparent' },
                  to: { borderColor: isDark ? '#fff' : '#000' },
                },
              }}
          >
            &quot;Looking for your dream car? This might be the one! Contact our sales agent now.&quot;
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="h6" color="primary"></Typography>
          </Box>
          <Box
            component="table"
            sx={{
              width: '100%',
              border: 1,
              borderColor: isDark ? 'gray.700' : 'gray.300',
              mt: 2,
            }}
          >
            <Box
              component="tbody"
              sx={{
                color: isDark ? 'gray.300' : 'gray.700',
                fontSize: '0.875rem',
              }}
            >
              {[
                { label: 'Brand', value: car.brand },
                { label: 'Model', value: car.model },
                { label: 'Price', value: car.price, isHighlighted: true },
                { label: 'Seating Capacity', value: car.seats },
                { label: 'Color', value: car?.availableColors.join(',')},
                { label: 'Fuel Type', value: car.fuel },
                { label: 'Year', value: car.year },
              ].map((row, index) => (
                <Box
                  component="tr"
                  key={index}
                  sx={{
                    borderBottom: 1,
                    borderColor: mode === 'dark' ? 'gray.700' : 'gray.300',
                  }}
                >
                  <Box
                    component="td"
                    sx={{
                      p: 2,
                      fontWeight: 'bold',
                      width: '33.33%',
                    }}
                  >
                    {row.label}
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      p: 2,
                      color: row.isHighlighted ? 'green.500' : 'inherit',
                      fontWeight: row.isHighlighted ? 'bold' : 'normal',
                    }}
                  >
                    {row.value}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
              p: 2,
              bgcolor: isDark ? '#333' : '#f9f9f9',
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contact Our Sales Agent
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Name: John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: sales@carfinder.com
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}