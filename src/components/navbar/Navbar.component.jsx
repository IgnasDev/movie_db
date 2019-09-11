import React from 'react';

import Logo from '../logo/Logo.component.jsx';
import Navigation from '../navigation/Navigation.component.jsx';

import './Navbar.style.css';

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            nav_class: 'navigation__ul'
        }

        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler() {
        console.log('click')
        if(this.state.nav_class === 'navigation__ul') {
            this.setState({nav_class : 'navigation-responsive'})
        } else {
            this.setState({nav_class : 'navigation__ul'})
        }
    }

    render() {
        

        return (
  

            <div className="navbar">
                <div className="navbar__left-content">
                    <Logo />
                    <Navigation  className={this.state.nav_class}/>
                    <div onClick={this.eventHandler} className="burger-icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                
            </div>
      
        )
    }
}

export default Navbar;
