import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Header from './Header';

const Home = () => {
    const moviesCollection = useLoaderData()

    // const [movies,setMovies]=useState(moviesCollection)
   
    return (
      <div>
          <div>
            {/* <Navbar/> */}
           <Header/>
           <div className='mx-12 my-20'>
            <h3 className='text-2xl font-semibold mb-4'>Movies Collection</h3>
            <hr />
            <div className='grid grid-cols-4  gap-6 my-8'>
                {
                   moviesCollection.map((movie)=><MovieCard
                   movie={movie}
                   key={movie.show.id}
                   ></MovieCard>)
                }
            </div>
           </div>
        </div>
      </div>
    );
};

export default Home;