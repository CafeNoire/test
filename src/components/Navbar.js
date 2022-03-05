import React, { useState } from 'react';

const Navbar = (props) => {

    
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>OurTunes</h1>

            </div>
            <div className='search'>
                <input type="search" id='search-input' onChange={(e) => props.setSearch(e.target.value)}></input>
                <button id='delete'>←</button>
                <button id='searchbutton'>Search</button>
            </div>

            
        </div>
    );
};

export default Navbar;