import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    })
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
            {
                countries.map(country => <Country country={country} key={country.name}></Country>)
            }
        </div>
    );
};

export default Countries;