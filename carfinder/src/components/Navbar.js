// components/Navbar.js
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
export default function Navbar({ toggleTheme, mode }) {
  return (
    <AppBar sx={{ position:"fixed",top:0,backgroundColor: mode === 'light' ? '#000' : '#121212' }}>
      <Toolbar className="flex justify-center">
        <Typography variant="h6" sx={{marginLeft:"40%",textAlign:"center",fontFamily:"sans-serif",fontSize:"24px",fontWeight:"bold"}} >
          Car Finder
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton color="inherit" sx={{marginLeft:"auto"}}>
          <Link href="/wishlist" style={{ textDecoration: "none", color: "inherit" }}>
            <FavoriteIcon/>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
