import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ThemeToggle from '@/utils/ThemeToggle';
import Filters from './Filters';
import Link from "next/link";
export default function Navbar({onSearch}){
  return(
    <>
  <Box >
    <AppBar  position="static">
      <Toolbar sx={{display:"flex",backgroundColor:"black" ,flexDirection:"row",justifyContent:"space-between",alignContent:"center",gap:"4"}} >
          <Filters onChange={onSearch} />
        </Toolbar>
        <Link href="/wishlist" className="text-white font-medium hover:underline">
          ❤️ Wishlist
        </Link>

        <ThemeToggle/>
      </AppBar>
    </Box>
    <Box>
      <h1 style={{color:"black",fontSize:"40px",textAlign:"center"}}>Car Finder</h1>
      <h3 style={{color:"black",fontSize:"20px",textAlign:"center"}}>Find your dream car</h3>
    </Box>
    </>
    
  );
}
