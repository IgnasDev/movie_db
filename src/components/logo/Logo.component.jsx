import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './Logo.style.css';

const Logo = () => {
    return (
        <div>
            <Link to={'/'} className="nav-link">
                <div className="logo">
                    <h2 className="logo__second-heading">The</h2>
                    <h1 className="logo__main-heading">Movie</h1>
                    <h2 className="logo__second-heading">DB</h2>
                </div>
            </Link>
        </div>
    )
}

export default Logo;
