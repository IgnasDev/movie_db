import React from 'react';

import Navbar from '../../navbar/Navbar.component.jsx';
import Search from '../../search/Search.component.jsx';
import ContentList from '../../content-list/ContentList.component.jsx';
import Footer from '../../footer/Footer.component.jsx';
import OptionForm from '../../option-form/OptionForm.component.jsx';
import Input from '../../input/Input.component.jsx';


import './Discovery.style.css';

class Discovery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_loaded: false,
            items: [],
            api_key: 'ed13f8c505b8eb0b8f019d61fca295e1',
            year: null,
            sort_by: 'popularity descending',
            genres: 'action'
        }

        this.handleClick = this.handleClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
     
    }


    componentDidMount() {
        const defaultFetch = 'https://api.themoviedb.org/3/discover/movie?api_key=ed13f8c505b8eb0b8f019d61fca295e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019';
        this.fetchData(defaultFetch)
    }

    
    handleClick(event) {
       
        let stateProp = event.target.id;
        this.setState({
            [stateProp] : event.target.value
        }, () => {
            let notDefaultFetch = `https://api.themoviedb.org/3/discover/movie?api_key=ed13f8c505b8eb0b8f019d61fca295e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${this.state.year}`;
            this.fetchData(notDefaultFetch);
        });
    }

    fetchData(data_string) {
        fetch(data_string)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                     is_loaded : true,
                     items : result.results
                });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
            }
        )
    }
    render() {

        const yearOptions = () => {
            const optionsYearArray = [];
            for(let i = 0; i < 120; i++) {
                let option;
                if(i < 10) {
                    option = <option value={`190${i}`}> {`190${i}`} </option>
                }
                if(i > 9) {
                    option = <option value={`19${i}`}> {`19${i}`} </option>
                }
                if(i > 99) {
                    option = <option value={`200${i - 100}`}> {`200${i - 100}`} </option>
                }
                if(i > 109) {
                    option = <option value={`20${i - 100}`}> {`20${i - 100}`} </option>
                }
                optionsYearArray.push(option);
            }
            return optionsYearArray.reverse().map(item => item);
        }
    
        const popularityOptions = () => {
            const popularityCatArray = [
            'Popularity Descending', 
            'Popularity Ascending', 
            'Rating Descending', 
            'Rating Ascending', 
            'Release Date Descending' , 
            'Release Date Ascending',
            'Title A-Z' ];
    
            let optionArray = popularityCatArray.map( item => {
                return (
                    <option value={item}>{item}</option>
                )
            })
    
            return optionArray;
        }
    
        const genresOptions = () => {
            const genresArray = [
                'Action',
                'Adventure',
                'Animation',
                'Comedy',
                'Crime',
                'Documentary',
                'Drama',
                'Family',
                'Fantasy',
                'History',
                'Horror',
                'Music',
                'Mistery',
                'Romance',
                'Science Fiction',
                'TV Movie',
                'Thriller',
                'War',
                'Western'
            ]
    
            let optionArray = genresArray.map( item => {
                return (
                    <option value={item}>{item}</option>
                )
            })
    
            return optionArray;
        }

        return (
            <div className="discovery">
                <Navbar />
                <Search />
                <div className="discovery__heading">
                    <h1>Discover New Movies & TV Show</h1>
                </div>               
             
                <div className="filter-nav">
                    <div className="filter-nav__box">
                        <OptionForm id={'year'} name="Year" handleClick={this.handleClick} options={yearOptions}/>
                    </div>
                    <div className="filter-nav__box">
                        <OptionForm id={'sort_by'} name="Sort By"  options={popularityOptions}/>
                    </div>
                    <div className="filter-nav__box">
                        <OptionForm id={'genres'} name="Genres"  options={genresOptions}/>
                    </div>
                    <div className="filter-nav__box">
                        <Input name="Keywords"/>
                    </div>
                </div>
                <ContentList items={this.state.items}/>
                <Footer />
            </div>
        )
    }
}

export default Discovery;