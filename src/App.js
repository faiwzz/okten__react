import React from 'react';
import {Character} from "./components/Character";

const App = () => {
    return (
        <div>
            <Character id={1}
                       name={"Rick Sanchez"}
                       status={"Alive"}
                       species={"Human"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
            <Character id={176}
                       name={"Celebrity Jerry"}
                       status={"Alive"}
                       species={"Human"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/176.jpeg"}/>
            <Character id={305}
                       name={"Scary Glenn"}
                       status={"Alive"}
                       species={"Mythological Creature"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/305.jpeg"}/>
            <Character id={472}
                       name={"Baby Rick"}
                       status={"Alive"}
                       species={"Human"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/472.jpeg"}/>
            <Character id={535}
                       name={"Jeff"}
                       status={"Alive"}
                       species={"Human"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/535.jpeg"}/>
            <Character id={761}
                       name={"Turkey President Curtis"}
                       status={"Alive"}
                       species={"Animal"}
                       gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/761.jpeg"}/>/>
        </div>
    );
};

export {App};