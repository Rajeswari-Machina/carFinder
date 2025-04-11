import CarCard from "@/components/CarCard";
import useWishlist from "@/hooks/useWishlist";
import { useMediaQuery } from "@mui/material";

export default function WishlistPage({ toggleTheme, mode }) {
  const [wishlist] = useWishlist();
  const isSmallScreen = useMediaQuery('(max-width:860px)');
  return (
    <div style={{margin:"6% 2%"}}>
      <h2 style={{textAlign:"center"}}>Your Wishlist</h2>

      {wishlist.length > 0 ? (
        <div  style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {wishlist.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
}
