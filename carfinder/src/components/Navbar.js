// components/Navbar.js
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery'
export default function Navbar({ toggleTheme, mode }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <AppBar sx={{ position: "fixed", top: 0, backgroundColor: mode === 'light' ? '#000' : '#121212' }}>
      <Toolbar className="flex justify-center">
        <Typography 
          variant="h6" 
          sx={{ 
            marginLeft: isMobile ? "20%" : "40%", 
            textAlign: "center", 
            fontFamily: "sans-serif", 
            fontSize: isMobile ? "14px" : "24px", 
            fontWeight: "bold", 
            
          }}
        >
          CarFinder
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
          <Link href="/wishlist" style={{ textDecoration: "none", color: "inherit" }}>
            <FavoriteIcon />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
