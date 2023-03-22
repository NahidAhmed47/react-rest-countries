import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Display all rest countries data by api.</h1>
            <h3>Available countries data here: {countries.length}</h3>
        </div>
    );
};

export default Countries;