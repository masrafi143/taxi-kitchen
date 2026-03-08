import React from 'react';
import Navbar from '../Navbar';
import Heading from '../Heading';
import States from '../States';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <Heading>Kitchen Room</Heading>
            <States/>
        </div>
    );
};

export default Header;