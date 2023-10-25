import React, {useEffect, useState} from 'react';
import {launchService} from "../../services/launchService/launchService";
import {Launch} from "../launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data})=>{
            const filter = data.filter(item => item.launch_year !== "2020");
            setLaunches(filter)
        })
    }, [])
    return (
        <div>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};