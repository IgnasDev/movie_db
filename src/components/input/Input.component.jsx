import React from 'react';

import './Input.style.css';

const Input = () => {
    return (
        <div className="input">
            <label className="input-label">Keywords
            <input type="text" placeholder="Filter by keywords"/>
            </label>
        </div>
    )
}

export default Input;
