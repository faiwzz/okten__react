import React from 'react';

const Simpson = (props) => {
    let {name, surname, age, info, photo} = props;
    return (
        <div>
            <div className={'person'}>
                <h2>{name} {surname}, {age}</h2>
                <h3>{info}</h3>
                <img src={photo} alt={name}/>
            </div>
        </div>
    );
};

export {Simpson};