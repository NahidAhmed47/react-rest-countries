import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, population, region, capital} = props.country;
    return (
        <div className='single-country-div'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Total population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;