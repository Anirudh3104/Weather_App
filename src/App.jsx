import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterSearch from "./components/afterSearch.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import BeforeSearch from "./components/beforeSearch.jsx";
import Search from "./components/searchbar.jsx";
import getWeatherData from "./services/get.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-900 flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center mt-3">
        <Search setWeatherData={setWeatherData} />
      </div>
      {weatherData ? (
        <AfterSearch data={weatherData} />
      ) : (
        <BeforeSearch />
      )}
    </div>

  );
}

export default App;
