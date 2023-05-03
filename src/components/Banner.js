import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../request';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  

  return (

    <div>
        <div className='h-[28rem] w-full text-white relative'>
            <img className='w-full h-full object-center mix-blend-overlay' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='img'/>
            <div className='absolute inset-0 ml-8 pt-[140px] h-44  '>
                <h1 className='text-xl md:text-[2.5rem] font-extrabold pb-2 md:pb-4'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='pb-2 md:pb-4'>
                    <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-8 mr-4 py-1 bg-gray-600 bg-opacity-50 hover:bg-white hover:text-black duration-150 '>Play</button>
                    <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-8 mr-4 py-1 bg-gray-600 bg-opacity-50 hover:bg-white hover:text-black duration-150 '>My List</button>
                </div>
                <div className='w-[45rem] leading-snug text-sm max-w-sm h-20'>{ truncate(movie?.overview, 150)}</div>
            </div>
        </div>
    </div>
    
    // <div className='w-full h-[28rem]'>

    //     <header className='w-full h-full  text-white overflow-auto' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: 'center center'}}>
            
            
            
            
            
    //         <div className='ml-8 pt-[140px] h-44'>
    //             <div className='text-xl md:text-[2.5rem] font-extrabold pb-2 md:pb-4'>Movie Name</div>
    //             <div className='pb-2 md:pb-4'>
    //                 <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-8 mr-4 py-1 bg-gray-600 bg-opacity-50 hover:bg-white hover:text-black duration-150 '>Play</button>
    //                 <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-8 mr-4 py-1 bg-gray-600 bg-opacity-50 hover:bg-white hover:text-black duration-150 '>My List</button>
    //             </div>
    //             <div className='w-[45rem] leading-snug text-sm max-w-sm h-20 '>
    //                 { truncate(`This is test description This is test description This is test description This is test
    //                 description This is test description This is test description This is test description This is
    //                 test description`,150)}
                
    //             </div>
                
                
    //         </div>
    //     </header>
    // </div>
    
  )
}

export default Banner