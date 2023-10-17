import React from 'react';
import {Simpson} from "./components/Simpson";

const App = () => {
    return (
        <div>
            <Simpson
                name={'Bart'}
                surname={'Simpson'}
                age={10}
                photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpson name={'Homer'}
                     surname={'Simpson'}
                     age={40}
                     photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'}
                     surname={'Simpson'}
                     age={34}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'}
                     surname={'Simpson'}
                     age={9}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
            <Simpson name={'Maggie'}
                     surname={'Simpson'}
                     age={1}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export {App};