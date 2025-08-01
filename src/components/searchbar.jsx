import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import getWeatherData from "../services/get";

function Search({setWeatherData}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getWeatherData(searchTerm);
    setWeatherData(data);
  };

  return (
    <div className="flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-xl">
        <form onSubmit={handleSearch} className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden">
          {/* Search Icon (Inline SVG) */}
          <div className="absolute left-4 text-gray-400">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full pl-12 pr-28 py-3 text-lg rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-transparent text-gray-800"
          />
          <button
            type="submit"
            className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-200 ease-in-out shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
