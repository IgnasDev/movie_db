import React from 'react';

import './OptionForm.style.css';

const OptionForm = ({handleClick,name,options,id}) => {
    return (
        <form >
        <label className="option-label">
            <p>{name}</p>
            <select id={id} className="option-select" onClick={handleClick}>
                {options()}
            </select>
        </label>
    </form>
    )
}

export default OptionForm;
