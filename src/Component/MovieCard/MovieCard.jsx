import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ movie }) => {    
    const { show } = movie;
    const notFoundImage = "https://img.freepik.com/premium-vector/data-management-share-information-protect-it-from-computer-viruses_68708-2932.jpg"

    return (
        <Link to={`/movies/${show?.id}`} className="card card-compact shadow-xl hover:-translate-y-1 hover:scale-110 duration-300 p-4">
            <img src={show?.image?.medium ? show?.image?.medium :notFoundImage} className='h-full' alt="Shoes" />
            <div className="my-4 ">
                <div className='flex items-center justify-between mx-2'>
                    <h2 className="card-title">{show?.name}</h2>
                    <div className='flex items-center justify-between gap-2'>
                        <AiFillStar />
                        <h1>{show?.rating?.average?show?.rating?.average : 0 }</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;