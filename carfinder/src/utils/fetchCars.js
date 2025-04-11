import data from "@/data/mock/cars.json";
export default function fetchCars({ query, brand, price, fuel, seating }) {
  const filteredCars = data.filter(car => {
    const matchesQuery = query
      ? car.name.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesBrand = brand ? car.brand === brand : true;
    const matchesPrice = price ? car.price <= price : true;
    const matchesFuel = fuel ? car.fuelType === fuel : true;
    const matchesSeating = seating ? car.seatingCapacity === seating : true;
    return matchesQuery || (matchesBrand && matchesPrice && matchesFuel && matchesSeating);
  });
  console.log("Filtered Cars:", filteredCars);
  return filteredCars;
}