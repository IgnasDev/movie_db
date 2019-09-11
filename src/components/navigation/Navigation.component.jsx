import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Anchor from '../anchor/Anchor.component.jsx';
import './Navigation.style.css';

const Navigation = ({className}) => {
    return (
        <div className="navigation">
            <ul className={className}>
                <li className="navigation__li">
                    <Link to={'/discovery'} className="nav-link"> 
                        <Anchor name="DISCOVER"/> 
                    </Link>               
                </li>
                <li className="navigation__li"> <Anchor name="MOVIES"/> </li>
                <li className="navigation__li"> <Anchor name="TV SHOWS"/> </li>
                <li className="navigation__li"> <Anchor name="TV PEOPLE"/> </li>
            </ul>
        </div>
    )
}

export default Navigation;
