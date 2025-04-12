import React, { useState } from "react";
import Filters from "@/components/Filters";
import CarCard from "@/components/CarCard";
import Pagination from "@/components/Pagination";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import data from '@/data/mock/cars.json'
export default function Home({ toggleTheme, mode }) {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const handleSearch = (results) => {
    setSearchResults(results);
    setCurrentPage(1); 
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = searchResults.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  React.useEffect(() => {
    const fetchInitialCars = async() => {
      
      const initialCars = data.slice(0,5);
      setSearchResults(initialCars);
    };

    fetchInitialCars();
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/car3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 className="text-4xl font-bold">
            <span className="animated-text">Find Your Dream Car</span>
          </h1>
          <p className="text-lg mt-2">
            <span className="animated-text">Explore a wide range of cars</span>
          </p>
        </div>
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Filters onChange={handleSearch} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
            <CarCard key={car.id || index} car={car} />
          ))
        ) : (
          <p className="col-span-full text-center">No results found</p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {searchResults.length > 0 && (
          <Pagination
            totalItems={searchResults.length}
            itemsPerPage={carsPerPage}
            currentPage={currentPage}
            onPageChange={(pageNumber) => {
              handlePageChange(pageNumber);
            }}
          />
        )}
      </div>

      <style jsx>{`
        .animated-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(30, end), blink 0.5s step-end infinite alternate;
          border-right: 2px solid white;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from {
            border-color: transparent;
          }
          to {
            border-color: white;
          }
        }
      `}</style>
    </>
  );
}
