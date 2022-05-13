import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { countriesLevelContext } from '../context/countriesLevelContext';

const Country = () => {

    const context = useContext(countriesLevelContext);
    

    const { alpha3Code } = useParams();

    const selectedCountry = context.countries.find(country => country.alpha3Code === alpha3Code)
    const { flag, name, capital } = selectedCountry

  return (    
    <div>
        <img src={flag} alt={`${alpha3Code}`} />
        <h1>{name}</h1>
        <h2>{capital}</h2>
    </div>
  )
}

export default Country