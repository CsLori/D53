import React from 'react';

const Dropdown = () => {
    return (
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="/home">Link 1</a>
                <a href="/home">Link 2</a>
                <a href="/home">Link 3</a>
            </div>
        </div>
    );
};

export default Dropdown;