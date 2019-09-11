import React from 'react';

import Card from '../card/Card.component.jsx';
import './ContentList.style.css';

const ContentList = ({items}) => {
    let arr = items.map( item => {
        console.log(item)
        return <Card key={item.id} image_path={item.poster_path} title={item.title} date={item.date} description={`${item.overview.slice(0, 150)}...`}/>
    })
    return (
        <div className="content-list">
            {arr.map( item => item)}
        </div>
    )
}

export default ContentList;
