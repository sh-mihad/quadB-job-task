import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const {show} = movie;
    
    return (
        <Link to={`/movies/${show?.id}`} className="card card-compact shadow-xl hover:-translate-y-1 hover:scale-110 duration-300">
           <img src={show?.image?.medium}  alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{show?.name}</h2>
            </div>
        </Link>
    );
};

export default MovieCard;