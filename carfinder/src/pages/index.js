import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import Pagination from "@/components/Pagination";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const carsPerPage = 10;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = searchResults.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div  className="w-full px-4">
      <Navbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
              <CarCard key={index} car={car} />
          ))
        ) : (
          <p className="col-span-full text-center">No results found</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          totalItems={searchResults.length}
          itemsPerPage={carsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      theme="colored"
    />
    </>
  );
}
