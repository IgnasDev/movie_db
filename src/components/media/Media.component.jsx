import React from 'react';

import TV from '../tv/TV.component.jsx';
import Movie from '../movie/Movie.component.jsx';
import './Media.style.css';

class Media extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="media">
                <TV />
                <Movie />
            </div>
        )
    }
}

export default Media;
