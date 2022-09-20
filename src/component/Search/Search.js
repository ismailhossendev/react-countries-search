import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Search = (props) => {
    const url = props.name;
    const [countries,setCountries] = useState([]);
    
    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${url}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    })
    if (
        typeof countries === 'object' &&
        !Array.isArray(countries) &&
        countries !== null
    ) { 
        return
    }
    
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
            {
                countries.map(country => <Country country={country} key={country.name}></Country>)
            }
        </div>
        </div>
    );
};

export default Search;