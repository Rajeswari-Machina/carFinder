import CarCard from "@/components/CarCard";
import useWishlist from "@/hooks/useWishlist";
import { useMediaQuery } from "@mui/material";

export default function WishlistPage({ toggleTheme, mode }) {
  const [wishlist] = useWishlist();
  const isSmallScreen = useMediaQuery('(min-width:600px) and (max-width:800px)');
  const isMobile = useMediaQuery('(max-width:599px)'); 

  return (
    <div style={{ margin: "6% 2%" }}>
      <h2 style={{ textAlign: "center" }}>Your Wishlist</h2>

      {wishlist.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(1, 1fr)"
              : isSmallScreen
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {wishlist.map((car, index) => (
            <CarCard key={index} car={car} mode={mode} />
          ))}
        </div>
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
}
