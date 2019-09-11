import React from 'react';

import Navbar from '../../navbar/Navbar.component.jsx';
import Search from '../../search/Search.component.jsx';
import Recap from '../../recap/Recap.component.jsx';
import Media from '../../media/Media.component.jsx';
import Footer from '../../footer/Footer.component.jsx';

import './Home.style.css';

class Home extends React.Component {
  constructor() {
    super();
    
    this.state = {

    }
  }

  render() {
    return (
      
      <div className="home">
        <Navbar />
        <Search />
        <Recap />
        <Media />
        <Footer />
      </div>
    );   
  }

}

export default Home;
