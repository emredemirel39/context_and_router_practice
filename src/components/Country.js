import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppLevelContext } from '../context/AppLevelContext';

const Country = () => {

  const context = useContext(AppLevelContext);
  const { alpha3Code } = useParams();

  const selectedCountry = context.countries.find(country => country.alpha3Code === alpha3Code);
  const { flag, name, capital, population } = selectedCountry;

  return (    
    <div className='country-details'>
        <img src={flag} alt={`${alpha3Code}`} />
        <h1>{name}</h1>
        <h2>{capital}</h2>
        <h2>{population}</h2>
    </div>
  );
};

export default Country;