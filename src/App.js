import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLevelContext } from './context/AppLevelContext';
import Country from './components/Country';
import CountryList from './components/CountryList';
import Home from './views/Home';

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

    setSearch(e.target.value.toLowerCase());
  };
  

  return (
    <AppLevelContext.Provider value={{countries, search, eventHandler}}>
      <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/countries' element={<CountryList/>} />
          <Route path='/countries/:alpha3Code' element={<Country/>} />
        </Routes>
      </div>
      </Router>
    </AppLevelContext.Provider>
  );
};

export default App;
