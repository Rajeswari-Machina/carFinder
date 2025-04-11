import CarCard from "@/components/CarCard";
import useWishlist from "@/hooks/useWishlist";

export default function WishlistPage() {
  const [wishlist] = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
