import Link from "next/link";
import { Card, CardContent, CardMedia, Typography, Stack, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useWishlist from "@/hooks/useWishlist"; 

export default function CarCard({ car }) {
  const [wishlist, toggleWishlist] = useWishlist();

  const isWished = wishlist.some((c) => c.id === car.id);

  const handleWishlist = (e) => {
    e.preventDefault(); 
    toggleWishlist(car);
  };

  return (
    <Card
      sx={{
        width:"100%",
        borderRadius: "10px",
        color: "black",
        boxShadow: "0 0 5px gray",
        backgroundColor: "rgb(0,0,0,0.1)",
      "&:hover": {
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      },
      }}
    >
      <Link href={`/car/${car.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            sx={{ height: 200, width:"100%", padding: "10px" }}
            image={car.image}
            title={car.name}
          />
      </Link>
      <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5">
              {car.name}
            </Typography>
            <FavoriteIcon
              sx={{ color: isWished ? "red" : "gray", cursor: "pointer" }}
              onClick={handleWishlist}
            />
          </div>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2e7d32", marginBottom: "5px" }}>
          ₹{car.price}/- Only
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "blue", marginBottom: "5px" }}>
          Available in {Array.isArray(car?.availableColors) ? car.availableColors.join(', ') : car.availableColors} colors
        </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.description}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ marginTop: "1%" }}>
            <Chip label={car.fuel} color="secondary" variant="outlined" />
            <Chip
              label={`${car.seating} seater`}
              color="secondary"
              variant="outlined"
            />
            <Chip label={car.brand} color="secondary" variant="outlined" />
          </Stack>
        </CardContent>
      
    </Card>
  );
}
