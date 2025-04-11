import SearchIcon from '@mui/icons-material/Search';
import {useEffect,useState} from 'react';
import data from "@/data/mock/cars.json";
import fetchCars from '@/utils/fetchCars';
export default function Filters({ onChange }) {
  const styles={
    select: "p-4 m-8 bg-black dark:bg-white rounded-lg shadow-md text-white dark:text-black font-semibold",
  }
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [seating, setSeating] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const handleSearch = ({ query, brand, price, fuel, seating }) => {
    const result =  fetchCars({ query, brand, price, fuel, seating });
    if (result) {
      console.log("Search results:", result);
    }
    console.log("Search triggered with:", { query, brand, price, fuel, seating });
    if (onChange) {
      onChange(result);
    }
  };

  useEffect(() => {
    const fetchSuggestions = () => {
      const allSuggestions = data.map(car => car.name);
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    };
    fetchSuggestions();
  }, [query]);

  return (    
        <div className="flex-row justify-between items-center ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for cars..."
              style={{width:"80%",height:"10px ", borderColor:"gold",backgroundColor:"black",color:"white",borderRadius:"5px",padding:"10px"}}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              style={{border:"none",background:"none",cursor:"pointer"}}
              onClick={() => handleSearch({ query, brand, price, fuel, seating })}
            >
              <SearchIcon  sx={{width:"100" ,height:"100%",color:"white",marginTop:"10px",alignSelf:"center"}}/>
            </button>
          </div>
          
          {suggestions.length > 0 && (
              <ul className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-md mt-2 top-0 left-0 w-full z-10">
                { query?suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => setQuery(suggestion)}
                  >
                    {suggestion}
                  </li>
                )):null}
              </ul>
            )}
          <div sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <select
            className={`${styles.select}`}
            onChange={e => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="mercedes">Mercedes</option>
            <option value="tesla">Tesla</option>
          </select>
          <select
            className={`${styles.select}`}
            onChange={e => setPrice(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="50000">0 - 50,000</option>
            <option value="100000">50,000 - 1,00,00</option>
            <option value="500000">1,00,000-5,00,000</option>
            <option value="500000">above 5,00,000</option>
            <option value="100000">above 10,00,000</option>
          </select>
          <select
            className={`${styles.select}`}
            onChange={e => setFuel(e.target.value)}
          >
            <option value="">All Fuels</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <select
            className={`${styles.select}`}
            onChange={e => setSeating(e.target.value)}
          >
            <option value="">Seating</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          </div>
        </div>
 
  );
}
