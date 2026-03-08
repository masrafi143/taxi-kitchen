import { ChefHat } from 'lucide-react';
import React from 'react';

const Heading = ({children}) => {
    return (
        <h2 className={`bg-[url(/title-bg.png)] pt-10 pb-20 bg-no-repeat bg-center flex justify-center items-center gap-1 text-4xl text-center font-bold`}
        style={{backgroundSize: "100% 100%"}}
        >
            <ChefHat size={40}/>
            {children}
        </h2>
    );
};

export default Heading;