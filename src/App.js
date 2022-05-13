import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { countriesLevelContext } from './context/countriesLevelContext';
import './App.css';
import Country from './components/Country';
import CountryList from './components/CountryList';
import Home from './components/Home';

function App() {

  const [ countries, setCountries ] = useState([]);
  const [ search, setSearch ] = useState([]);

  useEffect(() => {

      const fetchCountries = async () => {

          const url = 'https://restcountries.com/v2/all';
      
          const response = await axios.get(url);
          setCountries(response.data);
      };

      fetchCountries ();

  }, []);


  const eventHandler = (e) => {

      console.log(e.target.value);
      setSearch(e.target.value.toLowerCase());
  };
  

  return (
    <countriesLevelContext.Provider value={{countries, search, eventHandler}}>
      <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/countries' element={<CountryList/>} />
          <Route path='/countries/:alpha3Code' element={<Country/>} />
        </Routes>
      </div>
      </Router>
    </countriesLevelContext.Provider>
  );
}

export default App;
