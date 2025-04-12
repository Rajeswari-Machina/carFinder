import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState, useCallback } from 'react';
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
import data from "@/data/mock/cars.json";
import fetchCars from '@/utils/fetchCars';

export default function Filters({ onChange }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [seating, setSeating] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [color, setColor] = useState("");

  const handleSearch = useCallback(() => {
    const result = fetchCars({ query, brand, price, fuel, seating, color, sortOrder });
    if (result && onChange) onChange(result);
  }, [query, brand, price, fuel, seating, color, sortOrder, onChange]);

  // Debounce for filters
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timeout);
  }, [handleSearch]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const allSuggestions = data.map(car => car.name || '');
      const filtered = allSuggestions.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 1000, mx: "auto", mt: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Autocomplete
          freeSolo
          options={suggestions || []}
          inputValue={query}
          onInputChange={(_, newValue) => setQuery(newValue || "")}
          onChange={(_, value) => setQuery(value || "")}
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
            <Select value={brand} label="Brand" onChange={e => setBrand(e.target.value)}>
              <MenuItem value="">All Brands</MenuItem>
              {['Toyota', 'Honda', 'Ford', 'BMW', 'Audi', 'Mercedes', 'Tesla', 'Hyundai', 'Kia', 'Tata', 'Volkswagen', 'Renault', 'Mahindra', 'MG', 'Maruti Suzuki'].map(b => (
                <MenuItem key={b} value={b}>{b}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Max Price</InputLabel>
            <Select value={price} label="Price" onChange={e => setPrice(e.target.value)}>
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
            <Select value={fuel} label="Fuel" onChange={e => setFuel(e.target.value)}>
              <MenuItem value="">All Fuels</MenuItem>
              <MenuItem value="Petrol">Petrol</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Electric">Electric</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Seating</InputLabel>
            <Select value={seating} label="Seating" onChange={e => setSeating(e.target.value)}>
              <MenuItem value="">Any</MenuItem>
              {[4, 5, 6, 7].map(seat => (
                <MenuItem key={seat} value={seat}>{seat}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortOrder} label="Sort By" onChange={e => setSortOrder(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Color</InputLabel>
            <Select value={color} label="Color" onChange={e => setColor(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="grey">Grey</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
