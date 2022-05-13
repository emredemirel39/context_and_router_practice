import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { countriesLevelContext } from '../context/countriesLevelContext.js';

const CountryDetails = () => {

    const context = useContext(countriesLevelContext);

    const findAlpha3Code = (param, alpha3Code) => {
        param = alpha3Code;
        return param;
    };

    const { alpha3Code } = useParams();

    //const countryCode = findAlpha3Code(alpha3Code);

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
}

export default CountryDetails;