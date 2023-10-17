import React from 'react';

const Character = (props) => {
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <div>
                <h2>ID: {id}, Status: {status}</h2>
                <h3>Name: {name}</h3>
                <h3>Species: {species}</h3>
                <h3>Gender: {gender}</h3>
                <img src={image} alt={name}/>
            </div>
        </div>
    );
};

export {Character};