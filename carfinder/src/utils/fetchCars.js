import data from "@/data/mock/cars.json";
export default function fetchCars({ query, brand, price, fuel, seating,color, sortOrder }) {
  let filteredCars = data.filter(car => {
    const matchesQuery = query ? car.name.toLowerCase().includes(query.toLowerCase()) : true;
    const matchesBrand = brand ? car.brand === brand : true;
    const matchesPrice = price ? car.price <= parseInt(price) : true;
    const matchesFuel = fuel ? car.fuel === fuel : true;
    const matchesSeating = seating ? car.seats === parseInt(seating) : true;
    const matchesColor = color ? car.availableColors.includes(color) : true;
    return matchesQuery && matchesBrand && matchesPrice && matchesFuel && matchesSeating&&matchesColor;
  });

  if (sortOrder === "lowToHigh") {
    filteredCars = filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredCars = filteredCars.sort((a, b) => b.price - a.price);
  }

  console.log("Filtered Cars:", filteredCars);
  return filteredCars;
}
