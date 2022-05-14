import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppLevelContext } from '../context/AppLevelContext.js';

const CountryList = () => {

  const context = useContext(AppLevelContext);  

  return (
    <div className='country-list'>
        <input onChange={context.eventHandler} type='text' placeholder='search'/>
        <div className="country-wrapper">
            {context.countries
            .filter(country => country.name.toLowerCase().includes(context.search))
            .map((country) => {
            return (
                <React.Fragment key={country.name} >
                    <Link to={`/countries/${country.alpha3Code}`} >
                        <div className="country-card">
                            <h1>{country.name}</h1>
                        </div>
                    </Link>
                </React.Fragment>
            )
        })}
        </div>
    </div>
  )
};

export default CountryList;