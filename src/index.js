import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useLocalStorage from './components/useLocalStorage.jsx'
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  //recall key : value pair 
  //key : 'dark-mode'
  //initialValue : false 
  
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    //workaround ternary for switching to dark-mode 
    <div className={darkMode ? "dark-mode" : "App"}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
