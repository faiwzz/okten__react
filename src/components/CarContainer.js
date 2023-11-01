import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [flag, setFlag] = useState(null);

    const trigger = () =>{
        setFlag(prev => !prev)
    }

    useEffect(() =>{
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])
    return (
        <div>
            <CarForm carForUpdate={carForUpdate} trigger={trigger} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarContainer};