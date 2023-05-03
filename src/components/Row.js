import axios from '../axios';
import React, { useEffect, useState } from 'react'

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData();
    }, [fetchUrl])

    
  return (
    <div className='bg-black pt-4'>
        <div className=' text-white ml-5'>
            <h2 className=' text-2xl font-bold '>{title}</h2>
            <div className='flex overflow-y-hidden overflow-x-scroll no-scrollbar p-5'>
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                        className={`max-h-24 object-contain mr-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${isLargeRow && "max-h-60" }`}
                        key={movie.id} 
                        src={`${baseUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                    )
                    
                ))}

            </div>
        </div>

    </div>
  )
}

export default Row