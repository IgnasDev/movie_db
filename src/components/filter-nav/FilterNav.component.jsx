import React from 'react';

import OptionForm from '../option-form/OptionForm.component.jsx';
import Input from '../input/Input.component.jsx';
import './FilterNav.style.css';

const FilterNav = ({handleClick}) => {
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
        <div className="filter-nav">
            <div className="filter-nav__box">
                <OptionForm id={'year'} name="Year" handleClick={handleClick} options={yearOptions}/>
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
    )
}

export default FilterNav;
