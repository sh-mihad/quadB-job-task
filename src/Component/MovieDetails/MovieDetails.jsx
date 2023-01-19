import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';

const MovieDetails = () => {
    const movie = useLoaderData();
    console.log(movie);
    const { name, image, premiered, summary } = movie

   const bookingForm=(event)=>{
    event.preventDefault();
    const movieName = event.target.movie.value
    const userName = event.target.movie.value
    const userEmail = event.target.movie.value
    const userBookingData = {
        movieName,
        userEmail,
        userName
    }
    localStorage.setItem('BookingData', JSON.stringify(userBookingData));
    toast.success("Your booking is added to Loacl storage")

   }


   

    return (
        <div>
            <div className='shadow-xl'>
                <Navbar />
            </div>
            <div className="overflow-hidden bg-gray-900">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">

                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 my-10 ">
                            <div className="relative">

                                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <img src={image?.original} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12 text-center lg:text-left">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                {
                                    name
                                }

                            </h2>
                            <small>premiered: {premiered}</small>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                {
                                    summary.slice(3, -4)
                                }
                            </p>
                            <label htmlFor="movie-modal" className="btn bg-red-500 border-none">Book Now</label>
                        </div>
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="766323e1-e594-4ffd-a688-e7275079d540"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        {/* The button to open modal */}
                        {/* <label htmlFor="movie-modal" className="btn">open modal</label> */}

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="movie-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="movie-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                               <form onSubmit={bookingForm}>
                               <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Movie Name</span>
                                        </label>
                                        <input type="text" name='movie' placeholder="" className="input input-bordered" defaultValue={name} readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input name='userName' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input name='userEmail' type="email" placeholder="Enter Your Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className=''><label className="btn btn-primary"  htmlFor="movie-modal"  >Book Now</label></button>
                                    </div>
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;