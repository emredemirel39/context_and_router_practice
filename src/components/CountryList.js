import React, { useEffect, useState } from 'react';
import axios from "axios";
import { countriesLevelContext } from '../context/countriesLevelContext.js';
import CountryDetails from './CountryDetails';

const CountryList = () => {

   

  return (
    
    <div>
        <CountryDetails />
        </div>
  )
}

export default CountryList