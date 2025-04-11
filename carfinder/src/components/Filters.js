// components/Filters.js
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  TextField,
  IconButton,
  MenuItem,
  Paper,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Autocomplete
} from '@mui/material';
import { useEffect, useState } from 'react';
import data from "@/data/mock/cars.json";
import fetchCars from '@/utils/fetchCars';

export default function Filters({ onChange }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [seating, setSeating] = useState("");

  const handleSearch = () => {
    const result = fetchCars({ query, brand, price, fuel, seating });
    if (result && onChange) onChange(result);
  };

  useEffect(() => {
    const allSuggestions = data.map(car => car.name);
    const filteredSuggestions = allSuggestions.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions.slice(0, 5));
  }, [query]);

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 1000, mx: "auto", mt: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Autocomplete
          freeSolo
          options={suggestions}
          inputValue={query}
          onInputChange={(e, newValue) => setQuery(newValue)}
          onChange={(e, value) => setQuery(value)}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for cars..."
              variant="outlined"
              fullWidth
            />
          )}
        />
        <IconButton
          color="primary"
          onClick={handleSearch}
          sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              value={brand}
              label="Brand"
              onChange={e => setBrand(e.target.value)}
            >
              <MenuItem value="">All Brands</MenuItem>
              {['Toyota', 'Honda', 'Ford', 'BMW', 'Audi', 'Mercedes', 'Tesla'].map(b => (
                <MenuItem key={b} value={b.toLowerCase()}>{b}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Price</InputLabel>
            <Select
              value={price}
              label="Price"
              onChange={e => setPrice(e.target.value)}
            >
              <MenuItem value="">All Prices</MenuItem>
              <MenuItem value="50000">0 - 50,000</MenuItem>
              <MenuItem value="100000">50,000 - 1,00,000</MenuItem>
              <MenuItem value="500000">1,00,000 - 5,00,000</MenuItem>
              <MenuItem value="1000000">Above 5,00,000</MenuItem>
              <MenuItem value="10000000">Above 10,00,000</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Fuel</InputLabel>
            <Select
              value={fuel}
              label="Fuel"
              onChange={e => setFuel(e.target.value)}
            >
              <MenuItem value="">All Fuels</MenuItem>
              <MenuItem value="petrol">Petrol</MenuItem>
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Seating</InputLabel>
            <Select
              value={seating}
              label="Seating"
              onChange={e => setSeating(e.target.value)}
            >
              <MenuItem value="">Any</MenuItem>
              {[4, 5, 6, 7].map(seat => (
                <MenuItem key={seat} value={seat}>{seat}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
