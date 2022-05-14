import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppLevelContext } from '../context/AppLevelContext.js';

const CountryList = () => {

  const context = useContext(AppLevelContext);

  return (
    <div>
    <input onChange={context.eventHandler} type='text' placeholder='search'/>
    {context.countries
        .filter(country => country.name.toLowerCase().includes(context.search))
        .map((country) => {
            return (
                <div key={country.name} className="country-card">
                    <Link to={`/countries/${country.alpha3Code}`} >
                        <h1>{country.name} {country.alpha3Code}</h1>
                    </Link>
                </div>
            )
        })}
    </div>
  )
};

export default CountryList;