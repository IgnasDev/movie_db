import React from 'react';

import './Card.style.css';

const Card = ({title, date, description, image_path}) => {
    return (
        <div className="card">
            <div className="card__img-box">
                <img className="card__img" src={`https://image.tmdb.org/t/p/w780/${image_path}`} alt="cover"/>
            </div>
            <div className="card__box">
                <h2 className="card__title">{title}</h2>
                <p className="card__date">{date}</p>
                <p className="card__desc">{description}</p>
                <div className="card-box__footer">
                    <p className="card__more">More Info</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
