import CarCard from "@/components/CarCard";
import useWishlist from "@/hooks/useWishlist";
import { useMediaQuery } from "@mui/material";

export default function WishlistPage({ toggleTheme, mode }) {
  const [wishlist] = useWishlist();
  const isSmallScreen = useMediaQuery('(max-width:860px)');
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>

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
