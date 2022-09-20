import React from 'react';

const Country = (props) => {
    const {name,flags,region,population} = props.country
    return (
        <div>
            <div className="card bg-gray-400 shadow-xl h-[25rem]">
            <figure className="px-10 pt-10">
                <img src={flags.png}alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name} </h2>
                <p>Region: {region} | Population: {population}</p>
                <div className="card-actions">
                <button className="btn btn-primary">More Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Country;