import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const toggleWishlist = (car) => {
    const exists = wishlist.find((c) => c.id === car.id);
    let updated;

    if (exists) {
      updated = wishlist.filter((c) => c.id !== car.id);
      toast.info(`${car.name} removed from wishlist.`);
    } else {
      updated = [...wishlist, car];
      toast.success(`${car.name} added to wishlist!`);
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return [wishlist, toggleWishlist];
}
